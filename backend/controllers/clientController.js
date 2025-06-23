// controllers/clientController.js
const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.getAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.getById(id);
    if (!client) {
      return res.status(404).json({ error: 'Client introuvable' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getClientReservations = async (req, res) => {
  try {
    const { id } = req.params;
    const reservations = await Client.getWithReservations(id);
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.createClient = async (req, res) => {
  try {
    const clientId = await Client.create(req.body);
    res.status(201).json({ id: clientId });
  } catch (error) {
    res.status(400).json({ error: 'Données invalides' });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    await Client.update(id, req.body);
    res.json({ message: 'Client mis à jour' });
  } catch (error) {
    res.status(400).json({ error: 'Erreur mise à jour' });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    await Client.delete(id);
    res.json({ message: 'Client supprimé' });
  } catch (error) {
    res.status(400).json({ error: 'Erreur suppression' });
  }
};

