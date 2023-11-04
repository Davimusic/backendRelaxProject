/*const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser') 
const getDocumentByTipo = require('./backend/getDocumentByTipo.js');
const validateExistingUserLogin = require('./backend/validateExistingUserLogin.js')
const createNewUser = require('./backend/createNewUser.js');
const getTagNames = require('./backend/getTagNames.js')

const app = express();

app.use(cors()); 
app.use(bodyParser.json());

app.get('/api/getTagsNames', getTagNames)
app.post('/api/documents', getDocumentByTipo);
app.post('/api/users', createNewUser);
app.post('/api/validateUser', validateExistingUserLogin);

//app.listen(process.env.PORT || 5000);
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

module.exports = app*/


const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app