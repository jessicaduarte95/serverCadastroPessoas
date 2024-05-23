import mongoose, { Schema, Document, Model } from 'mongoose';

interface IPessoa extends Document {
	nome: string;
	email: string;
}

const PessoaSchema: Schema<IPessoa> = new Schema({
	nome: { type: String, required: true },
	email: { type: String, required: true }
});

const Funcionario: Model<IPessoa> = mongoose.model<IPessoa>('Pessoa', PessoaSchema);

export default Funcionario;
