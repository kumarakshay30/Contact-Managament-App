const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/contact-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
// GET all contacts
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts', error: error.message });
    }
});

// POST new contact
app.post('/api/contacts', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        
        // Basic validation
        if (!name || !email || !phone) {
            return res.status(400).json({ message: 'Name, email, and phone are required' });
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        
        const contact = new Contact({ name, email, phone, message });
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: 'Error creating contact', error: error.message });
    }
});

// DELETE contact
app.delete('/api/contacts/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
