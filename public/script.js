function cadastrarSimples() {

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_cadastroSimples")));

    var nome_resp = formulario.get("nome_resp");
    var email = formulario.get("email");
    var telefone = formulario.get("telefone");
    var empresa = formulario.get("nome_empresa");
    var servico = formulario.get("servico");


    if (nome_resp == "" || email == "" || telefone == "" || empresa == "" || servico == "") {

        window.alert("Preencha todos os campos para prosseguir!");
        if (nome_resp == "") {
            console.log('nome está em branco')
        }
        if (email == "") {
            console.log('email está em branco')
        }
        if (telefone == "") {
            console.log('telefone está em branco')
        }
        if (empresa == "") {
            console.log('empresa está em branco')
        }
        if (servico == "") {
            console.log('servico está em branco')
        }
        return false;
    }

    if (nome_resp.length < 1) {
        window.alert("Nome inválido!");
        return false;
    }
    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        window.alert("Seu e-mail está inválido!");
        return false;
    }
    if (telefone.length < 9) {
        window.alert("Telefone inválido!");
        return false;
    }
    if (empresa.length < 1) {
        window.alert("Empresa inválida!");
        return false;
    }
    if (servico.length < 1) {
        window.alert("Insira um motivo válido!");
        return false;
    }

    fetch("/usuarios/cadastrarSimples", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
                window.alert("Cadastro realizado com sucesso! Entraremos em contato");
                window.location = "Index.html";
                limparFormulario();
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            window.location = "Login2.html";
        });
    
        return false;
    }



function cadastroEmpresa() {

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_cadastro")));
    
        var nome = formulario.get("nome_empresa");
        var cnpj = formulario.get("cnpj");
        var logradouro = formulario.get("logradouro");
        var numero = formulario.get("numero");
        var estado = formulario.get("estado");
        var cidade = formulario.get("cidade");
        var site = formulario.get("site");
    
    
        if (nome == "" || cnpj == "" || logradouro == "" || numero == "" || estado == "" || cidade == "" || site == "") {
    
            window.alert("Preencha todos os campos para prosseguir!");
            if (nome == "") {
                console.log('nome está em branco')
            }
            if (cnpj == "") {
                console.log('cnpj está em branco')
            }
            if (logradouro == "") {
                console.log('logradouro está em branco')
            }
            if (numero == "") {
                console.log('numero está em branco')
            }
            if (estado == "") {
                console.log('estado está em branco')
            }
            if (cidade == "") {
                console.log('cidade está em branco')
            }
            if (site == "") {
                console.log('site está em branco')
            }
            finalizarAguardar();
            return false;
        }
    
    
        if (cnpj.length < 14) {
            window.alert("Seu CNPJ não é válido");
            return false;
        }
    
        fetch("/usuarios/cadastrarEmpresa", {
            method: "POST",
            body: formulario
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
                window.alert("Cadastro realizado com sucesso!");
                window.location = "Login2.html";
                limparFormulario();
                finalizarAguardar();
                
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();

        });
    
        return false;
    }




function entrar() {

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_login")));

    var usuario = formulario.get("usuario");
    var senha = formulario.get("senha");

    console.log("FORM LOGIN: ", usuario);
    console.log("FORM SENHA: ", senha);


    if (usuario == "" || senha == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        return false;
    }

    fetch("/usuarios/entrar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));


                sessionStorage.USUARIO = json.usuario;
                sessionStorage.SENHA = json.senha;


                setTimeout(function () {
                    alert(`Olá ${sessionStorage.USUARIO}, seja bem vindo! Você será redirecionado a sua dashboard.`);
                    window.location.href = "Dashboard.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;

}