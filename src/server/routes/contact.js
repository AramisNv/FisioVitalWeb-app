import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, requestType, description } = req.body;
    if (!name || !email || !phone || !requestType || !description) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    const newContact = new Contact({ name, email, phone, requestType, description });
    await newContact.save();
    res.status(201).json({ message: 'Mensaje guardado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el mensaje' });
  }
});

export default router;