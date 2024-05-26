const express = require('express');
const connectDB = require('./config/db'); // Correct path to db.js
const interviewRoutes = require('./routes/interviewRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB()
  .then(() => {
    // Middleware
    app.use(cors());
    app.use(express.json());

    // Routes
    app.use('/api/interviews', interviewRoutes);

    app.get('/', (req, res) => {
      res.send('API is running');
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

