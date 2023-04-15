"use strict";

// load modules
const express = require("express");
const { sequelize } = require("./models");
const routes = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const picRoutes = require("./routes/picRoutes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth = require("basic-auth");
const { asyncHandler } = require("./middleware/asyncHandler");
const { User } = require("./models");

// variable to enable global error logging
const enableGlobalErrorLogging =
  process.env.ENABLE_GLOBAL_ERROR_LOGGING === "true";

// create the Express app
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    // origin: process.env.CLIENT_URL ,
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// root route
// get time
const time = new Date().toLocaleTimeString();
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my REST API @ " + time,
  });
});

let refreshTokens = [];

// Create a new user
app.post(
  "/api/users",
  asyncHandler(async (req, res) => {
    try {
      await User.create(req.body);
      res.status(201).location("/users").end();
    } catch (error) {
      if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
      ) {
        const errors = error.errors.map((err) => err.message);
        res.status(400).json({ errors });
      } else {
        throw error;
      }
    }
  })
);

app.post(
  "/api/refresh",
  asyncHandler(async (req, res) => {
    // take the refresh token from the user
    const refreshToken = req.body.token;
    // send error if there is no token or if its invalid
    if (!refreshToken)
      return res.status(401).json({ message: "You are not authenticated!" });
    if (!refreshTokens.includes(refreshToken))
      return res.status(403).json({ message: "Refresh token is not valid!" });
    // verify the token

    jwt.verify(refreshToken, "my-refresh-token", (err, user) => {
      // send error if token verification fails
      err && console.log(err);
      // if everything is ok, create a new token, refresh token and send it back to the user
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      const newToken = generateAccessToken(user);
      const newRefreshToken = generateRefreshToken(user);
      refreshTokens.push(newRefreshToken);
      res.status(200).json({
        accessToken: newToken,
        refreshToken: newRefreshToken,
      });
    });
  })
);

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.emailAddress,
      password: user.password,
    },
    "my-access-token",
    { expiresIn: "10h" }
  );
};
const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.emailAddress,
      password: user.password,
    },
    "my-refresh-token"
  );
};

// Get a User
app.get(
  "/api/users",
  asyncHandler(async (req, res) => {
    try {
      const credentials = auth(req);

      if (credentials) {
        const user = await User.findOne({
          where: {
            emailAddress: credentials.name,
          },
        });
        if (user) {
          const authenticated = bcrypt.compareSync(
            credentials.pass,
            user.password
          );
          if (authenticated) {
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);
            refreshTokens.push(refreshToken);
            res.status(200).json({
              id: user.userID,
              firstName: user.firstName,
              accessToken,
              refreshToken,
            });
          } else {
            res.status(401).json({ message: "Access Denied" });
          }
        } else {
          res.status(401).json({
            message: `Authentication for ${credentials.name} failed`,
          });
        }
      }
    } catch (err) {
      throw err;
    }
  })
);

app.use("/pictures", picRoutes);
app.use("/api", routes);

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// set our port
app.set("port", process.env.PORT || 8080);

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  await sequelize.sync({ force: false });
})();

// start listening on our port
const server = app.listen(app.get("port"), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
