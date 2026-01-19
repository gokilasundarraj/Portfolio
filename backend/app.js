require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sendMail = require("./mailer");

const app = express();

app.use(
  cors({
    origin: [
      "https://portfolio-nine-nu-6wm5wrtb6j.vercel.app"
  
        ],
    methods: ["POST","GET"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.post("/send-mail", async (req, res) => {
  try {
    await sendMail(req.body);
    res.status(200).json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error("MAIL ERROR", error);
    res.status(500).json({ success: false, message: "Mail failed" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
