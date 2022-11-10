import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Alterar from "../alterar";
import Telefone from "../../modelo/telefone";

export default class AlterarCliente extends Alterar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public alterar(): void {

        let nome = this.entrada.receberTexto(`Informe o nome do cliente para alterar: `)
        let nomeSocial = this.entrada.receberTexto(`Informe o NOVO nome social do cliente: `)
        let indice = this.clientes.findIndex( i => i.nome === nome);
        let valor = this.entrada.receberTexto(`Informe o NOVO número do cpf: `);
        let data = this.entrada.receberTexto(`Informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let genero = this.entrada.receberTexto(`Qual o gênero (F-Feminino) (M-Masculino): `)
        
        if (indice != -1) {
            let novoNome = this.entrada.receberTexto(`Informe o NOVO nome: `)
            let cliente = new Cliente(novoNome, nomeSocial, cpf, genero);
            this.clientes[indice] = cliente;
        }
    
        console.log(`\nAlterado com sucesso!\n`);
    }
}