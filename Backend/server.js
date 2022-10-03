const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("test"));

var Messages = ["hi", "hello", "W orking"];

app.get("/messages", (req, res) => {
  res.send(Messages);
});

app.post("/messages", (req, res) => {
  let msg = req.body;

  Messages.push(msg.message);
  res.json(msg);
  console.log(Messages);
});

app.listen(port, () => console.log("running"));
