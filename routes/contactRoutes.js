// /routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST request to store contact form data
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message received successfully!' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ error: 'Failed to save message.' });
  }
});

module.exports = router;
