const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendgrid/mail");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow our server
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res) => {
  res.send("API Status: running");
});

app.post("/api/email", (req, res) => {
  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "yvette.henderson@gmail.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message,
  };

  sendGrid.send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

app.listen(3030, "0.0.0.0");
