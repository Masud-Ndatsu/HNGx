const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api", (req, res) => {
  try {
    const date = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (!req.query.slack_name && !req.query.track) {
      if (
        req.query.slack_name !== "Biggie.ts" ||
        req.query.track !== "backend"
      ) {
        return res.status(200).json({
          error_code: 400,
          message: "Invalid slack name or track provided",
        });
      }
    }

    const response = {
      slack_name: "Biggie.ts",
      current_day: days[date.getDay()],
      utc_time: date,
      track: "backend",
      github_file_url:
        "https://github.com/Masud-Ndatsu/HNGx/blob/master/task1/index.js",
      github_url: "https://github.com/Masud-Ndatsu/HNGx",
      status_code: 200,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.log({ error });
  }
});

app.listen(port, () => console.log("listening on port: " + port));
