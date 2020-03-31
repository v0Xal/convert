function convertBinary() {
  var output = document.getElementById("output");
  var input = document.getElementById("input");
  output = "";
  for (var i = 0; i < input.length; i++) {
      output += input[i].charCodeAt(0).toString(2) + " ";
  }
}

function convert(){
let input = document.getElementById("input");
let type  = document.getElementById("type").value;
let output;
if (type = base64){
 output = btoa(input); 
  document.getElementById("output") = output;
} else{
  output = convertBinary(input);
  document.getElementById("output") = output;
}
}
