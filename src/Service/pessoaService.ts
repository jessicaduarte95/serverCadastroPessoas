import Pessoa from '../Model/Pessoa';

interface PessoaInterface {
	nome: string;
	email: string;
}
export async function getPessoasService(data: PessoaInterface) {
	try {
		const response = await Pessoa.find({
			nome: { $regex: '.*' + data.nome + '.*', $options: 'i' },
			email: { $regex: '.*' + data.email + '.*', $options: 'i' }
		});
		return response;
	} catch (error) {
		console.error('Erro ao carregar dados.', error);
	}
}

export async function insertPessoaService(data: PessoaInterface) {
	try {
		const createFuncionario = {
			nome: data.nome,
			email: data.email
		};
		const response = await Pessoa.create(createFuncionario);

		return response;
	} catch (error) {
		console.error('Erro ao adicionar funcionário.', error);
	}
}
