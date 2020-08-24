# Specify base image
# The alpine tagged version (node:alpine) of the node image is far more smaller/lighter!
# Node image comes with dependencies that in this case aren't necessary.
# For in this case we only need npm...
FROM node:alpine

WORKDIR /usr/app

# COPY instruction moves files and folders from your local file system in your machine,
# to the file system inside the temporary container that's build during de build process.
# The files and later commands will be run relative to the WORKDIR set before.
COPY ./package.json ./

# Install project dependencies
RUN npm install

# COPY is made twice, so that npm install only runs if a change in package.json is detected.
# This prevents the Dockerfile of re-running the npm install command, and re-building the image
# every time a change in the source code is detected.
# Image should be rebuilt only when the dependencies of the project changed. That is, a
# change in the package.json file was detected.
COPY ./ ./

# Set default command
CMD ["npm", "start"]

# To have web accesibility to the server, the container should be run by mapping a
# port of your machine to the port in wich the container is runnning the server.
# docker run -p machine_port:container_port image_id/image_tag