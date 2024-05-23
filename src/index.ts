import express from 'express';
import cors from 'cors';
import router from './Routes/pessoaRouter';

const conn = require('./database');
conn();

const app = express();
app.use(cors());

app.use(express.json());

const port: number = 5000;

app.use('/', router);

app.listen(port, () => {
	console.log(`Servidor Rodando na port ${port}.`);
});
