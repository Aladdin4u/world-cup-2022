const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const axios = require("axios");

//u dont need to keep register bcs your using it only once, so make a call and get rid of that
app.get("/api/register", (req, res) => {
  const data = JSON.stringify({
    name: "userName",
    email: "userEmail",
    password: "8CharPwd",
    passwordConfirm: "userPwdConfirm",
  });

  const config = {
    method: "post",
    url: "http://api.cup2022.ir/api/v1/user",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

//next you need to login to get token. You need to call this endpoint 1/24h(bcs every time you are logging in your token changes, your being loggedIn for 24hrs) and store token in some variable.
app.get("/api/login", (req, res) => {
  const data = JSON.stringify({
    email: "taofikakinkumi@gmail.com",
    password: "123456789",
  });

  const config = {
    method: "post",
    url: "http://api.cup2022.ir/api/v1/user/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      token = response.data.data.token;
    })
    .catch(function (error) {
      console.log(error);
    });
});

//teams
app.get("/api/teams", (req, res) => {
  const config = {
    method: "get",
    url: "http://api.cup2022.ir/api/v1/team",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
