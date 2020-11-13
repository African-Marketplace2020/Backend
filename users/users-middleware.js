const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../secrets/userSecret")

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    
    jwt.verify(token, jwtSecret, (error, decodedToken) => {
      if (error) {
        //INVALID TOKEN
        res.status(401).json({ message: "Invalid Token" });
      } else {
        // TOKEN MATCHES 
        req.jwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Authentication Failed" });
  }
};