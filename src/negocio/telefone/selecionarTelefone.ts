import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";

export default class SelecionarTelefone {
    private running: Boolean
    private telefones: Array<Telefone>
    private entrada: Entrada

    constructor(telefones: Array<Telefone>){
        this.running = true;
        this.telefones = telefones;
        this.entrada = new Entrada();
    }

    public selecionar = () => {
        while(this.running){
            console.log('\nLista de telefones com índice')
            this.telefones.forEach((cliente, indice) => {
                console.log(`${indice} - ${cliente.telefone}`);
            });

            let opcao = this.entrada.receberNumero('Por favor, escolha o telefone através do índice: ');
            let telefone = this.telefones[opcao];
            if (telefone) {
                // se telefone encontrado
                this.running = false;
                return opcao
            } else {
                // se telefone não for encontrado
                console.log('Telefone não encontrado, por favor insira o índice novamente');
            }

            
        }
    }
}