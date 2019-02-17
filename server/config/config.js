
//============
// Puerto
//============
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//fecha expiracion 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//seed
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//BD
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//Google ClientID
process.env.CLIENT_ID = process.env.CLIENT_ID || '588969259212-fg3nvup8nebak8oakb5v7rleacrlgif5.apps.googleusercontent.com';