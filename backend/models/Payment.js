const pool = require('../config/db');

const Payment = {
  // Afficher tous les paiements avec infos de réservation et client
  getAll: async () => {
    const [rows] = await pool.query(`
      SELECT 
        p.id,
        p.amount,
        p.payment_date,
        r.id AS reservation_id,
        r.start_date,
        r.end_date,
        c.name AS client_name
      FROM payments p
      JOIN reservations r ON p.reservation_id = r.id
      JOIN clients c ON r.client_id = c.id
    `);
    return rows;
  },

  // Créer un paiement
  create: async (data) => {
    const { reservation_id, amount, payment_date } = data;
    const [result] = await pool.query(
      'INSERT INTO payments (reservation_id, amount, payment_date) VALUES (?, ?, ?)',
      [reservation_id, amount, payment_date]
    );
    return result.insertId;
  }
};

module.exports = Payment;

