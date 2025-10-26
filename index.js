const express = require('express');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
const app = express();

// Tambahkan ini untuk parsing JSON body
app.use(express.json());

app.use('/movies', movieRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🎬 Server running on port ${PORT}`));
