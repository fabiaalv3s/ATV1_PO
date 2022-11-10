import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";
import Deletar from "../deletar";
import listagemTelefone from "./listagemTelefone";
import listarTelefone from "./listagemTelefone";


export default class DeletarTelefone extends Deletar {
   
    private clientes: Array<Cliente>
    telefone: any;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
    }

    listarTelefone(){
        let entrada = new Entrada();
        let listarTelefone = new listagemTelefone(this.clientes);
        listarTelefone.listar();
        
        let telefone = entrada.receberTexto(`Informe o nome do cliente para excluir o telefone:`)
        
        this.telefone.splice(1);
        return;

    }

    public deletar(): void {
        console.log(`Inicio da exclusão do telefone`);
        this.listarTelefone();
        console.log(`Telefone excluído! `)
    }
    

}
