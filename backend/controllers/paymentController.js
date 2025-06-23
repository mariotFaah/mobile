const Payment = require('../models/Payment');

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.getAll();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.createPayment = async (req, res) => {
  try {
    const id = await Payment.create(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(400).json({ error: 'Données invalides' });
  }
};

