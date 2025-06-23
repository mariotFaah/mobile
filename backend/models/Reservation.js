const pool = require('../config/db');

const Reservation = {
  // Récupérer toutes les réservations avec client et chambre
  getAll: async () => {
    const [rows] = await pool.query(`
      SELECT 
        r.id,
        r.start_date,
        r.end_date,
        r.total_price,
        c.id AS client_id,
        c.name AS client_name,
        c.phone AS client_phone,
        ro.id AS room_id,
        ro.name AS room_name,
        ro.price AS room_price
      FROM reservations r
      JOIN clients c ON r.client_id = c.id
      JOIN rooms ro ON r.room_id = ro.id
    `);
    return rows;
  },

  // Créer une réservation
  create: async (data) => {
    const { client_id, room_id, start_date, end_date, total_price } = data;
    const [result] = await pool.query(
      'INSERT INTO reservations (client_id, room_id, start_date, end_date, total_price) VALUES (?, ?, ?, ?, ?)',
      [client_id, room_id, start_date, end_date, total_price]
    );
    return result.insertId;
  }
};

module.exports = Reservation;

