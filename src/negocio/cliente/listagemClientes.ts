import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import Telefone from "../../modelo/telefone";

export default class ListagemClientes extends Listagem {
    validar(): Cliente {
        throw new Error("Method not implemented.");
    }
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.genero);
            cliente.getTelefones.forEach(telefone => {
                console.log(`Telefone: (${telefone.getDdd}) ${telefone.getNumero}`)  
            })
            console.log(`========================================`);
        });
        console.log(`\n`);
    }
}