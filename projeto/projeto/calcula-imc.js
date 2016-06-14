
var trPacientes = document.getElementsByClassName("paciente");
for (var i = 0; i < trPacientes.length; i++) {
	var pacienteTr = trPacientes[i];

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
	var paciente = {"nome":tdNome.textContent,"peso":tdPeso.textContent,"altura":tdAltura.textContent};

	if(paciente.altura != 0){
	var imc = paciente.peso/(paciente.altura*paciente.altura);
	console.log(imc);
	tdImc.textContent = imc;
	
} else {
	console.log("Altura = 0");
}

}



