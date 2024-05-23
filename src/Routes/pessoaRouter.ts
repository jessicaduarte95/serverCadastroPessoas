import { Router } from 'express';
import { getPessoas, insertPessoa } from '../Controller/pessoaController';

const router = Router();

export default router
    .get('/api/pessoa', getPessoas)
    .post('/api/pessoa', insertPessoa)