const express = require('express');
const Contact = require('./model');
const { get } = require('mongoose');
const route = express.Router();

// Route de test
route.get('/leo', (req, res) => {
Contact.find().then(users=>res.json(users)).catch(err=>res.json(err))
});


// Route pour sauvegarder un message
route.post('/msgs', async (req, res) => {
    console.log('📩 Requête reçue :', req.body);

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: '❌ All fields are required' });
        }

        const newMsg = new Contact({ name , email, message });
        const savedMsg = await newMsg.save();

        console.log('✅ Message sauvegardé :', savedMsg);
        res.status(201).json({ success: '✔️ Message saved successfully!', data: savedMsg });
    } catch (error) {
        console.error('❌ Erreur lors de la sauvegarde :', error);
        res.status(500).json({ error: '❌ Server error' });
    }
});
route.delete('/delete/:id', async (req, res) => {
    try {
        const id=req.body 
        await Contact.deleteOne(id); // Utilise Abdo pour chercher par ID
        res.send("Tâche supprimée avec succès");
    } catch (err) {
        console.error('Erreur lors de la suppression:', err);
        res.status(500).json({ error: 'Erreur lors de la suppression' });
    }
});
module.exports = route;
 