import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    public genero: string
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    static telefone: Telefone

    constructor(nome: string, nomeSocial: string, cpf: CPF, genero:string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos

    }

    public addTelefone(telefone: Telefone){
        this.telefones.push(telefone)
    }

    public addServicos(servico?: Servico): void {
        if (!servico) {
            console.log("Serviço não Encontrado!");

        }
        else {
            this.servicosConsumidos.push(servico)
            console.log('Serviço adicionado!');

        }

    }
    public addProduto(produto?: Produto): void {
        if (!produto) {
            console.log("Produto não encontrado!");

        }
        else {
            this.produtosConsumidos.push(produto)
            console.log("Produto adicionado!");


        }
    }
}