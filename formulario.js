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
        if(erros.length > 0){

            var mensagemErro = document.querySelector("#mensagem-erro");
            mensagemErro.textContent = erros;
            console.log("Paciente Inválido");
            return;
        }
         
        //cria as tag <td> 
         var tabela = document.querySelector("#tabela-pacientes");
         tabela.appendChild(pacienteTr);
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

function validarPaciente(){
    
    var erros = [];

    if(!validarPeso (paciente.peso)) erros.push("Peso inválido!");
    
    if(!validarAltura(paciente.altura)) erros.push("Altura inválida!");
    
    return erros;
}











































