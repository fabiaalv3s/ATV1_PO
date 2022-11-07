export default class Servico {
    public nome!: string
    public preco: number

    constructor(nome: string, preco:number) {
        this.nome = nome
        this.preco = preco
    }
    public get getNomeServiço():string{
        return this.nome
    }
    public get getPrecoServiço():number{
        return this.preco
    }
}