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
import CadastroTelefone from "../negocio/telefone/cadastroTelefone";
import AlteraTelefone from "../negocio/telefone/alterarTelefone";
import DeletarTelefone from "../negocio/telefone/deletarTelefone";
import listarTelefone from "../negocio/telefone/listagemTelefone";
import CadastroRg from "../negocio/rg/cadastroRg";


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
    console.log(`9  - Cadastrar serviços`);
    console.log(`10 - Editar Serviços: `);
    console.log(`11 - Excluir Serviço: `);
    console.log(`12 - Listar todos os serviços:`);
    console.log("");
    console.log(`13 - Cadastrar Telefone:`); 
    console.log(`14 - Editar Telefone:`); 
    console.log(`15 - Excluir Serviço:`); 
    console.log(`16 - Listar todos os Telefones:`); 
    console.log("");
    console.log(`17 - Cadastrar RG:`); 
    console.log(`18 - Editar RG:`); 
    console.log(`19 - Excluir RG:`); 
    console.log(`20 - Listar todos os RGs:`); 
    console.log("");
    console.log(`21 - Adicionar Serviços/Produtos: `);
    console.log(`22 - Listar clientes por gênero: `);
    console.log(`23 - Listar 5 clientes que mais consumiram em valor: `);
    console.log(`24 - Listar consumo por gênero: `);
    console.log(`25 - Listar 10 clientes que mais consumiram em quantidade: `);
    console.log(`26 - Listar 10 clientes que menos consumiram em quantidade: `);
    console.log(`27 - Listar produto mais consumido: `);
    console.log(`28 - Listar serviço mais consumido: `);
    

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
            let telefone = new CadastroTelefone(empresa.getClientes)
            telefone.cadastrar();
            break;
        case 14:
            let alterarTelefone = new AlteraTelefone(empresa.getClientes)
            alterarTelefone.alterar();
            break;
        case 15:
            let deletarTelefone = new DeletarTelefone(empresa.getClientes)
            deletarTelefone.deletar();
            break;
        case 16:
            let listagemTelefone = new listarTelefone(empresa.getClientes)
            listagemTelefone.listar();
            break;
        case 17:
            let rg = new CadastroRg(empresa.getClientes)
            rg.cadastrar();
            break;
        case 18:
            let alterarRg = new AlteraTelefone(empresa.getClientes)
            alterarRg.alterar();
            break;
        case 19:
            let deletarRg = new DeletarTelefone(empresa.getClientes)
            deletarRg.deletar();
            break;
        case 20:
            let listagemRg = new listarTelefone(empresa.getClientes)
            listagemRg.listar();
            break;
        case 21:
            let consumoCliente = new ConsumoCliente(empresa)
            consumoCliente.cadastrar();
            break;
        case 22:
            let listarGenero = new ListagemGenero(empresa.getClientes)
            listarGenero.listar();
            break;
        case 23:
            let listar5Mais = new Listar5MaisConsumo(empresa.getClientes)
            listar5Mais.listar();
            break;
        case 24:
            let listarConsumoGen = new ListarConsumoGen(empresa.getClientes)
            listarConsumoGen.listar();
            break;
        case 25:
            let listar10Mais = new ListaMaiorConsumo(empresa.getClientes)
            listar10Mais.listar();
            break;
        case 26:
            let listar10Menos = new ListaMenorConsumo(empresa.getClientes)
            listar10Menos.listar();
            break;
        case 27:
            let listarProdMais = new ProdMaisConsumido(empresa.getClientes)
            listarProdMais.listar();
            break;
        case 28:
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