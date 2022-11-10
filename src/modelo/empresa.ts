import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private telefone: Array<Telefone>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.telefone = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getTelefone(){
        return this.telefone
    }
}