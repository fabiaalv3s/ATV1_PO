import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastrar";

export default class cadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `)
        let preco = this.entrada.receberNumero(`Informe o preço do produto: `)
        let produto = new Produto(nome,preco);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído! \n`);
    }
}