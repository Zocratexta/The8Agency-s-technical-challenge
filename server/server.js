const express = require("express");
const { connection } = require("./db");
const routes = require("./routes/attendees.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

const PORT = process.env.PORT || 3001;
connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", () => {
  console.log("connect")
  app.listen(PORT, () => console.log(`Server on`))
});
