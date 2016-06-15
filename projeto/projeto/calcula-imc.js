function calculaTodosImcs(){
	var trPacientes = document.getElementsByClassName("paciente");
	for (var i = 0; i < trPacientes.length; i++) {
		var pacienteTr = trPacientes[i];

		var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
		var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
		var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		var paciente = { nome: tdNome.textContent,
						 peso: tdPeso.textContent,
						 altura: tdAltura.textContent,
						 pegaImc: function(){
							if(this.altura > 0){
								var imc = this.peso/(this.altura*this.altura);
								return imc;
							} else {
								console.log("Altura <= 0!");
							}
						}};

	
		if(paciente.pegaImc() > 0){
			tdImc.textContent = paciente.pegaImc();
		} 


	}

}

var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs;
botao.addEventListener("click", calculaTodosImcs);