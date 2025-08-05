const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const moduleRoutes = require('./routes/modules');
const progressRoutes = require('./routes/progress');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/modules', moduleRoutes);
app.use('/api/progress', progressRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));

