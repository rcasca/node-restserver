require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Config global rutas
app.use( require('./routes/index'));

//habilitar public
app.use(express.static(path.resolve(__dirname , '../public')));


mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true }, (err, res)=>{
  if (err){
    throw new Error;        
  }

  console.log('BBDD online');
});

app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto:', process.env.PORT);
});