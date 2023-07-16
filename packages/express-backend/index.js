const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const URI =
  "mongodb+srv://simon:simon@cluster0.wmkip.mongodb.net/?retryWrites=true&w=majority";
const corsOptions = {
  origin: "http://localhost:3000",
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(URI)
  .then(() => {
    const PORT = process.env.PORT || 9000;
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});
