const express = require("express");
const { request, response } = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Holo");
})

app.listen(8080, () => {
  console.log("Server running on port 8080");
})