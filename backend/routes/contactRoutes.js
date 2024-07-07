const express = require('express');
const router = express.Router();
const Contact = require('./../models/Contact');

// Create Contact
router.post('/', async (req, res) => {

    console.log(req.body)
    try {
        const { name, email, number, company, service, budget, details, file} = req.body;

        
        const newContact = new Contact({
            name,
            email,
            number,
            company,
            service,
            budget,
            details,
            file: file || '',
        });

        const savedContact = await newContact.save();
        res.status(201).json(savedContact);

    } catch (error) {
        console.error(error.message);
        res.status(400).json({ error: error.message });
    }
});

// Show All Contacts
router.get("/", async (req, res) => {
  try {
    const contactItems = await Contact.find();
    console.log(contactItems);
    res.status(200).json({ contacts: contactItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//update Contacts
 
 


//Delete Contacts

module.exports = router;
