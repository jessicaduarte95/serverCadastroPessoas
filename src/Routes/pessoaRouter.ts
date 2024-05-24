import { Router } from 'express';
import { getPessoas, insertPessoa, deletePessoa } from '../Controller/pessoaController';

const router = Router();

export default router
    .get('/api/pessoa', getPessoas)
    .post('/api/pessoa', insertPessoa)
    .put('/api/pessoa/:id', deletePessoa)
    .delete('/api/pessoa/:id', deletePessoa)