const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
       user: process.env.EMAIL,
       pass: process.env.PASSMAIL,
   },
});

exports.sendEmail = async (req, res) => {
   try {
       const { to, subject, html } = req.body;


       const mailOptions = {
           from: process.env.EMAIL,
           to,
           subject,
           html,
       };

       await transporter.sendMail(mailOptions);
       res.status(200).json({ message: 'Email sent successfully.' });
   } catch (error) {
       console.error('Error sending email:', error);
       res.status(500).json({ error: 'Internal server error.' });
   }
};
