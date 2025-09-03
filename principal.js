//Este codigo serve para alterar o titulo e subtitulo do site
var tSecundario = document.querySelector(".titulo-secundario");
var titulo = document.querySelector(".titulo");
tSecundario.textContent = "Meus pacientes";
titulo.textContent = "Matheus Nutrição";

//Cria a variavel paciente e busca o elemento a partir da classe alterada
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    console.log(pacientes);
    console.log(paciente);
    //busca o elemento da altura e altera seu conteúdo
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o IMC e altera no elemento
    var IMC = peso / (altura * altura);

    //valores booleanos
    var pesoValido = true;
    var alturaValida = true;

    //alerta caso peso e altura sejam inválidos
    if(peso <=0 || peso >= 1000){
        var pesoValido = false;
        alert("Peso inválido!");
    }

    if(altura <= 0 || altura >= 3.00){
        alert("Altura invalida!");
        var alturaValida = false;
    }

    if(pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc")
        tdIMC.textContent = IMC.toFixed(2);
    }
}

