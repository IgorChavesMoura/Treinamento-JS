
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click",function(event){ // O navegador se vira pra passar esse event
	
	event.preventDefault(); //Impede o comportamento padrao de recarregar a pagina por causa do form 
	
	var nome = document.querySelector("#campo-nome");
	var peso = document.querySelector("#campo-peso");
	var altura = document.querySelector("#campo-altura");



	var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>"+nome.value+"</td>"+
						"<td class='info-peso' >"+peso.value+"</td>"+
						"<td class='info-altura' >"+altura.value+"</td>"+
						"<td class='info-imc' ></td>"+
					"</tr>"


	//var tabela = document.getElementsByTagName("table")[0];

	document.querySelectorAll("table")[0]; //Array com todas as tag table

	var tabela = document.querySelector("table"); //Primeiro elemento

	tabela.innerHTML += pacienteNovo
	nome.value = "";
	peso.value = "";
	altura.value = "";

});