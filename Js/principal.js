//Este codigo serve para alterar o titulo e subtitulo do site
var pacientes =	document.querySelector(".titulo-secundario");
var titulo=	document.querySelector(".titulo");
pacientes.textContent = "Meus pacientes";
titulo.textContent = "Matheus Nutrição";

//Cria a variavel paciente e busca o elemento a partir da classe alterada
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//busca o elemento da altura e altera seu conteúdo
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//calcula o IMC e altera no elemento
var IMC = peso / (altura * altura);
var tdIMC = paciente.querySelector(".info-imc")


tdIMC.textContent = IMC;