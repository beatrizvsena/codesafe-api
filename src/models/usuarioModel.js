var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM empresa;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function entrar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE usuario = '${usuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrarSimples(nome_resp, email, telefone, empresa, necessidade){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarSimples():", nome_resp, email, telefone, empresa, necessidade);
    var instrucao = `
        INSERT INTO primeiroCadastro (nome, email, telefone, empresa, necessidade) VALUES ('${nome_resp}', '${email}','${telefone}', '${empresa}', '${necessidade}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);

}

function cadastrarEmpresa(nome_empresa, cnpj, logradouro, numero, bairro, cidade, estado, site) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():", nome_empresa, cnpj, logradouro, numero, bairro, cidade, estado, site);
    var instrucao = `
        INSERT INTO empresa (nome, cnpj, logradouro, numero, bairro, cidade, estado, site
             ) VALUES ('${nome_empresa}','${cnpj}','${logradouro}','${numero}','${bairro}','${cidade}',
             '${estado}', '${site}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrarUsuario(nome, usuario, senha, email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarUsuario():", nome, usuario, senha, email);
    var instrucao = `
        INSERT INTO usuario (nome, usuario, senha, email
             ) VALUES ('${nome}','${usuario}', '${senha}', '${email}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function servidor(funcao, sistema,ram,cpu,ram_date,cpu_date) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function servidor():", funcao, sistema,ram,cpu,ram_date,cpu_date);
    var instrucao = `
        INSERT INTO servidor (nome, usuario, senha, email
             ) VALUES ('${funcao}','${sistema}', '${ram}', '${cpu}', '${ram_date}', '${cpu_date}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrarSimples,
    cadastrarEmpresa,
    cadastrarUsuario,
    servidor,
    listar,
};