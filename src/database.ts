import mongoose from 'mongoose';

async function main() {
	const MongoDB = 'mongodb+srv://jessica:password123456@cluster0.jx1zbub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(MongoDB);
		console.log('Conectado ao Banco de dados! ');
	} catch (error) {
		console.log(`Erro: ${error}`);
	}
}

module.exports = main;
