// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const roomRoutes = require('./routes/roomRoutes');
const clientRoutes = require('./routes/clientRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use('/api/rooms', roomRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/payments', paymentRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur serveur !');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
