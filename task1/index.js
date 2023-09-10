const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  const date = new Date();

  // if() {

  // }

  const response = {
    slack_name: "Biggie.ts",
    current_day: date.getDay(),
    utc_time: date.getUTCDate(),
    track: "backend",
    github_file_url: "",
    github_url: "",
    status_code: 200,
  };

  return res.status(200).json(response);
});

app.listen(port, () => console.log("listening on port: " + port));
