// models/Client.js
const pool = require('../config/db');

const Client = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM clients');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM clients WHERE id = ?', [id]);
    return rows[0];
  },

  getWithReservations: async (clientId) => {
    const [rows] = await pool.query(`
      SELECT r.*, ro.name AS room_name, ro.price AS room_price
      FROM reservations r
      JOIN rooms ro ON r.room_id = ro.id
      WHERE r.client_id = ?
    `, [clientId]);
    return rows;
  },

  create: async (clientData) => {
    const { name, phone } = clientData;
    const [result] = await pool.query(
      'INSERT INTO clients (name, phone) VALUES (?, ?)',
      [name, phone]
    );
    return result.insertId;
  },

  update: async (id, clientData) => {
    const { name, phone } = clientData;
    await pool.query(
      'UPDATE clients SET name = ?, phone = ? WHERE id = ?',
      [name, phone, id]
    );
  },

  delete: async (id) => {
    await pool.query('DELETE FROM clients WHERE id = ?', [id]);
  }
};

module.exports = Client;

