var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click',
    function(event){
        event.preventDefault();
        
        //Seleciona a tag <form> a partir do id
        var formulario = document.querySelector('#form-adiciona');
        
        //Variaveis para acessar o valor do <input>
        var paciente = dadosPacientesFormulario(formulario);
        console.log(paciente);
        
        //cria o elemento <tr>
        var pacienteTr = criaTR(paciente);
        
        var erros = validarPaciente(paciente);
        
        // Impede de adicionar o paciente
        console.log(erros);
        if(erros.length > 0){
            exibirmensagemErro(erros);
            return;
        }
         
        //cria as tag <td> 
         var tabela = document.querySelector("#tabela-pacientes");
         tabela.appendChild(pacienteTr).classList.add('paciente');
         formulario.reset();
    }
);

function dadosPacientesFormulario(formulario){
    //objeto paciente 
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        IMC: calculaIMC(formulario.peso.value, formulario.altura.value)
    }
    console.log(pacientes);

    return paciente;
}

function criaTR(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.IMC, "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classes){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classes);
    return td;
}

function validarPaciente(paciente){
    
    var erros = [];

    if(paciente.nome.length == 0) erros.push("Não pode tá vazio!");

    if(!validarPeso (paciente.peso)) erros.push("Peso inválido!");
    
    if(!validarAltura(paciente.altura)) erros.push("Altura inválida!");

    if(paciente.gordura.length == 0) erros.push("Gordura não pode ser vazia!");

    if(paciente.peso.length == 0) erros.push("Peso não pode ser vazio!");

    if(paciente.altura.length == 0) erros.push("Altura não pode ser vazia!");
    
    return erros;
}

//Quero adicionar cada item do array
//dentro da <ul>
//Acessa a tag <ul>
function exibirmensagemErro(erros){
    
    let ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = ""

    erros.forEach(function(erro){
        //Primeiro criar uma <li>
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}











































