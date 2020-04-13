let input = document.getElementById("input").value;
let type  = findSelect();
let output;

function binaryConvert() {
  var  boutput=document.getElementById("output");  
  var binput=document.getElementById("input").innerHTML;
    boutput.innerHTML = "";
    for (i=0; i < binput.length; i++) {
     	boutput.innerHTML +=binput[i].charCodeAt(0).toString(2) + " ";
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
  document.getElementById("output").innerHTML = output;
} else{
  output = binaryConvert(input);
  document.getElementById("output").innerHTML = output;
}
}
