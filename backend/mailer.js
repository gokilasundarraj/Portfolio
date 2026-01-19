const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port:587,
  secure:false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout : 10000,
});

transporter.verify((err) => {
  if (err) {
    console.error("MAIL SERVER ERROR", err);
  } else {
    console.log("MAIL SERVER READY");
  }
});

const sendMail = async ({ name, email, message }) => {
  return transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,                             
    replyTo: email,                                         
    subject: `Portfolio Contact - ${name}`,
    text: `
Name: ${name}
User Email: ${email}

Message:
${message}
    `,
  });
};

module.exports = sendMail;
