import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastrar";

export default class CadastroTelefone extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada;    

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        //perguntar cliente
        let nome = this.entrada.receberTexto(`Informe o nome do cliente para cadastrar o telefone: `)
        let cliente = this.clientes.find(cliente => cliente.nome === nome)

        console.log(`\nVamos cadastrar um telefone para contato: `);
        let ddd = this.entrada.receberTexto(`Informe o DDD: `);
        let numero = this.entrada.receberTexto(`Número do Telefone: `)
        let telefone = new Telefone(ddd, numero);

        cliente?.addTelefone(telefone)
        
        console.log(`\n Cadastro finalizado :)`);


    }
} 