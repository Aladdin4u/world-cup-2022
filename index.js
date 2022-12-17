const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

var bodyParser = require("body-parser");
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const { response } = require("express");

app.use(express.static("public"));
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc2ZTc5ZmZkOWFhYzIyNjczOTczMDIiLCJpYXQiOjE2NzEyOTczOTIsImV4cCI6MTY3MTM4Mzc5Mn0.X7ELyKpDW42Z24iE27wS_WbjBn-rLXx1p08UZe_4ptE";

var tokens;

app.get("/login", async (req, res) => {
  let user = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const api_url = `http://api.cup2022.ir/api/v1/user/login`;
  const fetch_response = await fetch(api_url, options);
  const json = await fetch_response.json();
  res.json(json);
  console.log(json.data.token);
  tokens = json.data.token;
});

app.get("/api/standings", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };

  const api_url = `http://api.cup2022.ir/api/v1/standings/`;
  const fetch_response = await fetch(api_url, options);
  const json = await fetch_response.json();
  res.json(json);
  //   console.log(json);
});

app.get("/api/match", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };

  const api_url = `http://api.cup2022.ir/api/v1/match/`;
  const fetch_response = await fetch(api_url, options);
  const json = await fetch_response.json();
  res.json(json);
  //   console.log(json);
});

app.get("/api/team", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };

  const api_url = `http://api.cup2022.ir/api/v1/team/`;
  const fetch_response = await fetch(api_url, options);
  const json = await fetch_response.json();
  res.json(json);
  //   console.log(json);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
