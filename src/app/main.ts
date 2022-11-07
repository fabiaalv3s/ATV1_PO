import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import AlterarCliente from "../negocio/cliente/alterarCliente";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import cadastroProduto from "../negocio/produto/cadastroProduto";
import DeletarCliente from "../negocio/cliente/deletarCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemProdutos from "../negocio/produto/listagemProduto";
import alterarProduto from "../negocio/produto/alterarProduto";
import DeletarProduto from "../negocio/produto/deletarProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import AlterarServico from "../negocio/servico/alterarServico";
import DeletarServico from "../negocio/servico/deletarServico";
import ListarServicos from "../negocio/servico/listarServico";
import ConsumoCliente from "../negocio/consumo/consumoCliente";
import ListagemGenero from "../negocio/listarGenero";
import Listar5MaisConsumo from "../negocio/consumo/listar5MaisConsumido";
import ListarConsumoGen from "../negocio/consumo/listarConsumoGen";
import ListaMaiorConsumo from "../negocio/consumo/listarMaiorConsumo";
import ListaMenorConsumo from "../negocio/consumo/listarMenorConsumo";
import ProdMaisConsumido from "../negocio/consumo/prodMaisConsumido";
import ListarServMais from "../negocio/consumo/listarServMais";

console.log(`\n##### Bem-vindo ao cadastro de clientes do Grupo World Beauty #####`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Selecione uma Opção:`);                            
    console.log(`1 -  Cadastrar cliente`);
    console.log(`2 -  Alterar cliente`);
    console.log(`3 -  Excluir cliente`);
    console.log(`4 -  Listar todos os clientes`);
    console.log("");
    console.log(`5 -  Cadastrar produto`);
    console.log(`6 -  Editar produto`);
    console.log(`7 -  Excluir produto`);
    console.log(`8 -  Listar todos os produtos`);
    console.log("");
    console.log(`9 -  Cadastrar serviços`);
    console.log(`10 - Editar Serviços: `);
    console.log(`11 - Excluir Serviço: `);
    console.log(`12 - Listar todos os serviços:`);
    console.log("");
    console.log(`13 - Adicionar Serviços/Produtos: `);
    console.log(`13 - Editar Produtos: `);
    console.log(`14 - Listar clientes por gênero: `);
    console.log(`15 - Listar 5 clientes que mais consumiram em valor: `);
    console.log(`16 - Listar consumo por gênero: `);
    console.log(`17 - Listar 10 clientes que mais consumiram em quantidade: `);
    console.log(`18 - Listar 10 clientes que menos consumiram em quantidade: `);
    console.log(`19 - Listar produto mais consumido: `);
    console.log(`20 - Listar serviço mais consumido: `);

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let alterarCliente = new AlterarCliente(empresa.getClientes);
            alterarCliente.alterar()
            break;
        case 3:
            let deletarCliente = new DeletarCliente(empresa.getClientes);
            deletarCliente.deletar()
            break;
        case 4:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 5:
            let cadastroProdutin = new cadastroProduto(empresa.getProdutos)
            cadastroProdutin.cadastrar()
            break;
        case 6:
            let alterarProdutin = new alterarProduto(empresa.getProdutos)
            alterarProdutin.alterar()
            break;
        case 7:
            let deletarProdutin = new DeletarProduto(empresa.getProdutos)
            deletarProdutin.deletar()
            break;
        case 8:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 9:
                let servico = new CadastroServico(empresa.getServicos)
                servico.cadastrar()
                break;
        case 10:
            let editarServico = new AlterarServico(empresa.getServicos)
            editarServico.alterar();
            break;
        case 11:
            let deletaServico = new DeletarServico(empresa.getServicos)
            deletaServico.deletar();
            break;
        case 12:
            let listagemServico = new ListarServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 13:
            let consumoCliente = new ConsumoCliente(empresa)
            consumoCliente.cadastrar();
            break;
        case 14:
            let listarGenero = new ListagemGenero(empresa.getClientes)
            listarGenero.listar();
            break;
        case 15:
            let listar5Mais = new Listar5MaisConsumo(empresa.getClientes)
            listar5Mais.listar();
            break;
        case 16:
            let listarConsumoGen = new ListarConsumoGen(empresa.getClientes)
            listarConsumoGen.listar();
            break;
        case 17:
            let listar10Mais = new ListaMaiorConsumo(empresa.getClientes)
            listar10Mais.listar();
            break;
        case 18:
            let listar10Menos = new ListaMenorConsumo(empresa.getClientes)
            listar10Menos.listar();
            break;
        case 19:
            let listarProdMais = new ProdMaisConsumido(empresa.getClientes)
            listarProdMais.listar();
            break;
        case 20:
            let listarServMais = new ListarServMais(empresa.getClientes)
            listarServMais.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        
        default:
            console.log(`Operação não entendida :(`)
    }
}