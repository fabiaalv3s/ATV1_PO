import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class SelecionarCliente {
    private running: Boolean
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        this.running = true;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public selecionar = () => {
        while(this.running){
            console.log('\nLista de clientes com índice')
            this.clientes.forEach((cliente, indice) => {
                console.log(`${indice} - ${cliente.nome}`);
            });

            let opcao = this.entrada.receberNumero('Por favor, escolha o cliente através do índice: ');
            let cliente = this.clientes[opcao];
            if (cliente) {
                // se cliente encontrado
                this.running = false;
                return cliente
            } else {
                // se cliente não for encontrado
                console.log('Cliente não encontrado, por favor insira o índice novamente');
            }

            
        }
    }
}