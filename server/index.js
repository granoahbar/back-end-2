const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const controller = require('./controller.js');
const {getHouses, deleteHouses, createHouses, updateHouses} = controller;

app.get('/api/houses/', getHouses)
app.delete('/api/houses/:id', deleteHouses)
app.post('/api/houses/', createHouses)
app.put('/api/houses/:id', updateHouses)

app.listen(4004, () => console.log('Server running on 4004'));