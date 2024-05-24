import { Request, Response } from 'express';
import { getPessoasService, insertPessoaService, deletePessoaService, updatePessoaService } from '../Service/pessoaService';

export async function getPessoas(req: Request, res: Response) {
	try {
		const data: any = req.query;
		const response = await getPessoasService(data);
		return res.status(200).json(response);
	} catch (error: any) {
		return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
	}
}
export async function insertPessoa(req: Request, res: Response) {
	try {
		const data: any = req.body;
		const response = await insertPessoaService(data);
		return res.status(201).json(response);
	} catch (error: any) {
		return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
	}
}

export async function updatePessoa(req: Request, res: Response) {
	try {
		const id: any = req.params;
		const data: any = req.body;
		const response = await updatePessoaService(id, data);
		return res.status(201).json(response);
	} catch (error: any) {
		return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
	}
}

export async function deletePessoa(req: Request, res: Response) {
	try {
		const id: any = req.params;
		const response = await deletePessoaService(id);
		return res.status(201).json(response);
	} catch (error: any) {
		return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
	}
}
