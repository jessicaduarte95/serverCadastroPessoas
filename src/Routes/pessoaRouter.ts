import { Router } from 'express';
import { getPessoas, insertPessoa, deletePessoa, updatePessoa } from '../Controller/pessoaController';

const router = Router();

export default router
    .get('/api/pessoa', getPessoas)
    .post('/api/pessoa', insertPessoa)
    .put('/api/pessoa/:id', updatePessoa)
    .delete('/api/pessoa/:id', deletePessoa)