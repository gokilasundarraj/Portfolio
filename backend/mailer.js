const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({ name, email, message }) => {
  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["gokilas333@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact - ${name}`,
      text: `
      Name: ${name}
      User Email: ${email}
      Message:${message}`,
    });

    return data;
  } catch (error) {
    console.error("RESEND ERROR:", error);
    throw error;
  }
};

module.exports = sendMail;
