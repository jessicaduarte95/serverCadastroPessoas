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
		console.error('Erro ao adicionar pessoa.', error);
	}
}

export async function updatePessoaService(id: any, data: any) {
	try {
		await Pessoa.findOneAndUpdate({ _id: id.id }, data);
		const dataFilter = {
			nome: '',
			email: ''
		};
		return getPessoasService(dataFilter);
	} catch (error) {
		console.error('Erro ao alterar pessoa.', error);
	}
}

export async function deletePessoaService(data: any) {
	try {
		const response = await Pessoa.deleteOne({ _id: data.id });
		return response;
	} catch (error) {
		console.error('Erro ao deletar pessoa.', error);
	}
}
