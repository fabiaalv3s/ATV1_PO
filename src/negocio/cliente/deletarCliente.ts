import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";
import CPF from "../../modelo/cpf";
import ListagemClientes from "./listagemClientes";

export default class DeletarCliente extends Deletar{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    listaClientes(){
        let listaClientes = new ListagemClientes(this.clientes);
        listaClientes.listar();
        let entrada = new Entrada();

        let cpf = entrada.receberTexto("Informar o CPF do cliente que deseja excluir: ");
        let indice = this.clientes.findIndex( i => i.getCpf.getValor === cpf);
        this.clientes.splice(indice,1);
        return;
    }

    public deletar(): void {
        console.log(`\nInício da exclusão do cliente`);
        this.listaClientes();
        console.log("Cliente excluído!")
    }
}