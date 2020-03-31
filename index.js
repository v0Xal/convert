let input = document.getElementById("input").value;
let type  = findSelect();
let output;

function convertBinary() {
  var boutput = document.getElementById("output");
  var binput = document.getElementById("input");
  output = "";
  for (var i = 0; i < binput.length; i++) {
      boutput += binput[i].charCodeAt(0).toString(2) + " ";
  }
}
function findSelect() { 
			let index = document.getElementById("type").selectedIndex; 
			let exit = document.getElementsByTagName("option")[index].value; 
			return exit;
} 

function convert(){
input = document.getElementById("input").value;
type  = findSelect();

if (type == "base64"){
 output = btoa(input); 
  document.getElementById("output") = output;
} else{
  output = convertBinary(input);
  document.getElementById("output") = output;
}
}
