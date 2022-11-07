import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Alterar from "../alterar";

export default class alterarProduto extends Alterar{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public alterar(): void {
        if(this.produtos.length == 0)
        return console.log(`\nNão há produtos cadastrados`);

        console.log(`\nInício da alteração do  produto`);
        
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `)
        let indice = this.produtos.findIndex( i => i.nome === nome);
        while (indice == -1) {
            nome = this.entrada.receberTexto(`Informe novamente o nome do produto: `)
            indice = this.produtos.findIndex( i => i.nome === nome);
            
        }
        let novoNome = this.entrada.receberTexto(`Informe o NOVO nome do produto: `)
        let preco = this.entrada.receberNumero(`Informe o NOVO preço do produto: `)
        let produto = new Produto(novoNome,preco);
        this.produtos[indice] = produto;
       
        console.log(`\nProduto alterado com sucesso! \n`);
    }
}