var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar (req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function entrar (req, res) {
    var usuario = req.body.usuario;
    var senha = req.body.senha;

    if (usuario == undefined) {
        res.status(400).send("Seu usuário está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(usuario, senha)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Usuário e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}

function cadastrarSimples(req, res) {
    var nome_resp = req.body.nome_resp;
    var email = req.body.email;
    var telefone = req.body.telefone;
    var empresa = req.body.empresa;
    var necessidade = req.body.necessidade;

    if (nome_resp == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    }else if (empresa == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    }else if (necessidade == undefined) {
        res.status(400).send("Sua necessidade está undefined!");
    }else {
        usuarioModel.cadastrarSimples(nome_resp, email, telefone, empresa, necessidade)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }


}

function cadastrarEmpresa(req, res) {
    var nome_empresa = req.body.nome_empresa;
    var cnpj = req.body.cnpj;
    var logradouro = req.body.logradouro;
    var numero = req.body.numero;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var estado = req.body.estado;
    var site = req.body.site;


    if (nome_empresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu CNPJ está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    }else if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    }else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    }else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    }else if (site == undefined) {
        res.status(400).send("Seu site está undefined!");
    }
    else {
        usuarioModel.cadastrarEmpresa(nome_empresa, cnpj, logradouro, numero, bairro, cidade, estado, site)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}


function cadastrarUsuario(req, res) {
   var nome = req.body.nome;
   var usuario = req.body.usuario;
   var senha = req.body.senha;
   var email = req.body.email;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    }else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else {
        usuarioModel.cadastrarUsuario(nome, usuario, senha, email)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro do usuário! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function servidor(req, res) {
    var funcao = req.body.funcao;
    var sistema = req.body.sistema;
    var ram = req.body.ram;
    var cpu = req.body.cpu;
    var ram_date = req.body.ram_date;
    var cpu_date = req.body.cpu_date;
 
     if (funcao == undefined) {
         res.status(400).send("Sua função está undefined!");
     }else if (sistema == undefined) {
         res.status(400).send("Seu sistema está undefined!");
     }else if (ram == undefined) {
         res.status(400).send("Sua RAM está undefined!");
     }else if (cpu == undefined) {
         res.status(400).send("Sua CPU está undefined!");
     }else if (ram_date == undefined) {
        res.status(400).send("Seu RAM_DATE está undefined!");
     }else if (cpu_date == undefined) {
        res.status(400).send("Seu CPU_DATE está undefined!");
     }
     else {
         usuarioModel.servidor(funcao, sistema, ram, cpu,ram_date,cpu_date)
         .then(
             function (resultado) {
                 res.json(resultado);
             }
         ).catch(
             function (erro) {
                 console.log(erro);
                 console.log(
                     "\nHouve um erro ao realizar o cadastro do servidor! Erro: ",
                     erro.sqlMessage
                 );
                 res.status(500).json(erro.sqlMessage);
             }
         );
     }
 }
module.exports = {
    entrar,
    cadastrarSimples,
    cadastrarEmpresa,
    cadastrarUsuario,
    servidor,
    listar,   
    testar
}