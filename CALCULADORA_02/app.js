var stringOperation = "";

var clearInput = () => (document.getElementById("input-number").value = "");

var getnumberA = () => {
  var stringOperation = document.getElementById("input-number").value;
  return stringOperation;
}

function calculate(operator) {
  if (stringOperation === "") {
    stringOperation += getnumberA() + operator;
  } else {
    stringOperation = eval(stringOperation + getnumberA()).toString();
    stringOperation += operator;
  }
  clearInput();
}

function totalResult() {
  if (getnumberA()) {
    stringOperation += getnumberA();
    var resultadoFinal = eval(stringOperation);
    document.getElementById("print-result").value = resultadoFinal;
  } else {
    error();    
  }
}

//SMILEY + RESET
function myFunction() {
  alert("HAVE A NICE DAY");
  document.getElementById("input-number").value = 0;
  document.getElementById("print-result").value = 0;
  operacion = "";
}

var error = () => {
    alert("ERROR");
    document.getElementById("input-number").value = 0;
    document.getElementById("print-result").innerText = "ERROR";
}