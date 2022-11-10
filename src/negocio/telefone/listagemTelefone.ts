import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import Telefone from "../../modelo/telefone";

export default class listarTelefone extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\nLista de todos os telefones:`);

        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            cliente.getTelefones.forEach((telefone, indice) => {
                console.log(`Telefone: (${telefone.getDdd}) ${telefone.getNumero}`)  
                console.log(`====================================`);
            })
        });
    
        console.log(`\n`);
    }
}