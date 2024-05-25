const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gamil.email",
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: {
        name: "Surya Pratap Singh",
        address: process.env.MAIL_USER,
      },
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log("Error in mailSender");
    console.log(error.message);
  }
};

module.exports = mailSender;
