var trsPacientes = document.getElementsByClassName("paciente");

for(var posAtual = 0; posAtual < trsPacientes.length; posAtual++){

	var	trPaciente = trsPacientes[posAtual];

	var tdNome = trPaciente.getElementsByClassName("info-nome")[0];

	console.log(tdNome.textContent);

}