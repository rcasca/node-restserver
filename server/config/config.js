
//============
// Puerto
//============
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//BD
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cursonode:cursonode@cluster0-shard-00-00-5wyqs.mongodb.net:27017,cluster0-shard-00-01-5wyqs.mongodb.net:27017,cluster0-shard-00-02-5wyqs.mongodb.net:27017/cafe?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
}

process.env.URLDB = urlDB;