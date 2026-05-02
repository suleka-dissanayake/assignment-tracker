const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/assignments', require('./routes/assignments'));
app.use('/api/subjects', require('./routes/subjects'));
app.use('/api/reminders', require('./routes/reminders'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT || 5000,
        () => console.log('Server running on port 5000')))
    .catch(err => console.error(err));