const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './build')))
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log('this port is awesome', port)
});