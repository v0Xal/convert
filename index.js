function convertBinary() {
  var output = document.getElementById("output");
  var input = document.getElementById("input");
  output = "";
  for (var i = 0; i < input.length; i++) {
      output += input[i].charCodeAt(0).toString(2) + " ";
  }
}
function findSelect() { 
			let index = document.getElementById("type").selectedIndex; 
			let exit = document.getElementsByTagName("option")[index].value; 
			return exit;
		} 

function convert(){
let input = document.getElementById("input").value;
let type  = findSelect();
let output;
if (type = base64){
 output = btoa(input); 
  document.getElementById("output") = output;
} else{
  output = convertBinary(input);
  document.getElementById("output") = output;
}
}
