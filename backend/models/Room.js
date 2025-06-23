const pool = require('../config/db');

const Room = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM rooms');
    return rows;
  },

  create: async ({ name, price, capacity }) => {
    const [result] = await pool.query(
      'INSERT INTO rooms (name, price, capacity) VALUES (?, ?, ?)',
      [name, price, capacity]
    );
    return result.insertId;
  },

  // Affiche toutes les réservations d'une chambre
  getReservations: async (roomId) => {
    const [rows] = await pool.query(`
      SELECT 
        r.id AS reservation_id,
        r.start_date,
        r.end_date,
        c.name AS client_name
      FROM reservations r
      JOIN clients c ON r.client_id = c.id
      WHERE r.room_id = ?
    `, [roomId]);
    return rows;
  }
};

module.exports = Room;

