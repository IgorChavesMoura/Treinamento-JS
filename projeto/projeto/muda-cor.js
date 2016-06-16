
var trs = document.getElementsByTagName("tr");

for (var i = 0; i < trs.length; i++) {
	var tr = trs[i];

	tr.addEventListener("mouseover",function(){
		this.setAttribute("bgcolor","grey");
	});
}