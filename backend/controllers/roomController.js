// controllers/roomController.js
const Room = require('../models/Room');

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.getAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const roomId = await Room.create(req.body);
    res.status(201).json({ id: roomId });
  } catch (error) {
    res.status(400).json({ error: 'Données invalides' });
  }
};
