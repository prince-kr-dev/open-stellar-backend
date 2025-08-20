require('dotenv').config();
const express = require('express');
const cors = require('cors');
const satellites = require('./data/satellites.json');

const app = express();
app.use(cors());
app.use(express.json());


app.get("/satellites", (req, res) => {
  try {
    res.send(satellites);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Something went wrong", error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});