const Reservation = require('../models/Reservation');

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.getAll();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.createReservation = async (req, res) => {
  try {
    const id = await Reservation.create(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(400).json({ error: 'Données invalides' });
  }
};

