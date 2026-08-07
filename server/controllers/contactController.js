import asyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';
import Contact from '../models/contactModel.js';

export const createContact = asyncHandler(async (req, res) => {
  const { name, phone, email, location, businessType, message } = req.body;
  const contact = await Contact.create({ name, phone, email, location, businessType, message });

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `MNS WADI <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: 'New Contact Inquiry',
    html: `<h2>New Inquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>Location:</strong> ${location}</p><p><strong>Business Type:</strong> ${businessType}</p><p><strong>Message:</strong> ${message}</p>`
  });

  res.status(201).json(contact);
});
