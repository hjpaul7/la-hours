require("dotenv").config();

const express = require("express");
const db = require("./db");
const app = express();

app.use(require("./middleware/headers"));

const controllers = require("./controllers");

app.use(express.json());

app.use("/user", controllers.usercontroller);

app.use(require("./middleware/validateSession"));
app.use("/hours", controllers.hourscontroller);

// const validateSession = require("./middleware/validateSession")

db.authenticate()
  .then(() => db.sync()) // => {force: true}
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`[Server: ] App is listening on Port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log("[Server: ] Server Crashed");
    console.error(err);
  });
