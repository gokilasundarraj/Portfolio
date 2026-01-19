require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sendMail = require("./mailer");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);


app.use(express.json());

app.post("/send-mail", async (req, res) => {
  try {
    await sendMail(req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR 👉", error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
