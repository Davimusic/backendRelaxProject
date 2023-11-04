const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser') 
const getDocumentByTipo = require('../backend/getDocumentByTipo');
const validateExistingUserLogin = require('../backend/validateExistingUserLogin.js')
const createNewUser = require('../backend/createNewUser.js');
const getTagNames = require('../backend/getTagNames.js')

const app = express();

app.use(cors()); 
app.use(bodyParser.json());

app.get('/api/getTagsNames', getTagNames)
app.post('/api/documents', getDocumentByTipo);
app.post('/api/users', createNewUser);
app.post('/api/validateUser', validateExistingUserLogin);

app.listen(process.env.PORT || 5000);

// Exporta una función asincrónica que recibe req y res
module.exports = async (req, res) => {
  // Usa tu código de Express como lo tienes
    app(req, res, (error) => {
        if (error) {
        res.status(500).send(error.message);
        }
    });
};


