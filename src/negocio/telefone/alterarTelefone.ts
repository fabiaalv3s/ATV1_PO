import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import telefone from "../../modelo/telefone";
import Telefone from "../../modelo/telefone";
import Alterar from "../alterar";
import SelecionarCliente from "./selecionarCliente";
import SelecionarTelefone from "./selecionarTelefone";

export default class AlteraTelefone extends Alterar {
    private clientes: Array<Cliente>
    private entrada: Entrada;    
    telefone: Telefone[] = [];
    

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
        this.entrada = new Entrada();
        
    }
    public alterar(): void {
        //perguntar cliente
        let cliente = new SelecionarCliente(this.clientes).selecionar() as Cliente;
        let telefone = new SelecionarTelefone(this.telefone).selecionar() as number;

        console.log(`\nVamos cadastrar um NOVO telefone para contato `);
 
        let novoDdd = this.entrada.receberTexto(`Informe o DDD: `);
        let novoNumero = this.entrada.receberTexto(`Número do Telefone: `)
        let novoTelefone = new Telefone(novoDdd, novoNumero);

        cliente.getTelefones[telefone] = novoTelefone

        console.log(`\n Telefone Alterado com Sucesso! :)`);
    }
} 