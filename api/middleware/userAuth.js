const jwt = require("jsonwebtoken");

// A middleware function to authenticate the request;
exports.userAuth = async (req, res, next) => {
  // Parse the user's credentials from the Authorisation header
  const credentials = req.headers.authorization;

  // If the user's credentials are in the database
  if (credentials) {
    // Get the user's data from the database by email
    const token = credentials.split(" ")[1];
    jwt.verify(token, "my-access-token", (err, user) => {
      if (err) {
        return res.status(403).json({
          message: `Invalid Token ${credentials}`,
        });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
};
