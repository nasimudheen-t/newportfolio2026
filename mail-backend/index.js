// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* ---------------------------------------
//    Health check
// --------------------------------------- */
// app.get("/", (req, res) => {
//   res.send("Mail backend running");
// });

// /* ---------------------------------------
//    Send mail endpoint
// --------------------------------------- */
// app.post("/send-mail", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         message: "All fields are required",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
//       to: process.env.MAIL_USER,
//       replyTo: email,
//       subject: "New contact form message",
//       html: `
//         <h3>New Message</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b></p>
//         <p>${message}</p>
//       `,
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error("Mail error:", error);
//     res.status(500).json({ message: "Failed to send mail" });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Mail backend running on port ${PORT}`);
// });
