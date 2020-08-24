const redis = require("redis");
const express = require("express");
const process = require("process");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379
});

client.set("visits", 0);

app.get("/", (request, response) => {
  client.get("visits", (error, visits) => {
    if (error) {
      process.exit(1);
    }

    response.send("Number of visits: " + visits);
    client.set("visits", parseInt(visits) + 1);
  })
})

app.listen(8080, () => {
  console.log("Server running on port 8080");
})
