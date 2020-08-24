
# The production image will be built using a Multi-step build
# Step 1: Build phase
# FROM node:alpine as builder
FROM node:alpine

WORKDIR "/app"

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build

# Step 2: Run phase
FROM nginx
EXPOSE 80

# By adding the from option, we are telling the Dockerfile
# to use the file system (or snapshot) generated in a specific step.
# In this case, the builder (0) step.
COPY --from=0 /app/build /usr/share/nginx/html

# CMD command is not necessary since by default, de nginx base image executes it for us.
