let input = document.getElementById("input").value;
let type  = findSelect();
let output;

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}
function binary2Text(string) {
	var binString = '';

string.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
return binString;
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
  output = text2Binary(input);
  document.getElementById("output").innerHTML = output;
}
}
function deConvert(){
input = document.getElementById("input").value;
type  = findSelect();
if (type == "base64"){
output = atob(input);
document.getElementById("output").innerHTML = output;
} else{
output = binary2Text(input);
document.getElementById("output").innerHTML = output;
}
}
