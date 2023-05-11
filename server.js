const express = require("express");
const logger = require("./public/middleware/logger");

const app = express();
app.use(logger);
app.use(express.static(__dirname + "/public"));

const PORT = 5001;
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`server running on port ${PORT}`);
});
