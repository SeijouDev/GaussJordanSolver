var matrix = [];
//var matrixTemp = [];
var pivot = 0;
var m = 0;//Rows
var n = 0; //Columns

document.addEventListener("DOMContentLoaded", function(event) { setMatrixSize();});

function setMatrixSize(){
    pivot = 0;
    m = Number(document.getElementById('rowInput').value);
    n = Number(document.getElementById('columnInput').value);
    let container1 = document.getElementById('MatrixInputContainer1');
    let container2 = document.getElementById('MatrixInputContainer2');
    let outputContainer = document.getElementById('MatrixOutContainer');
    
    while(container1.firstChild)
      container1.removeChild(container1.firstChild);  

      for(let i = 0; i < m ; i++){

        container1.appendChild(document.createElement('br'));
        
        for(let j = 0; j < n ; j++){

          let input = document.createElement('input');
          input.type = 'number';
          input.className = "valueInput";
          input.id = `input_${i + 1}${j + 1}`;
          container1.appendChild(input);

        }
      }
      
      
    while(container2.firstChild)
      container2.removeChild(container2.firstChild);  

      for(let i = 0; i < m ; i++){

        container2.appendChild(document.createElement('br'));
        
        for(let j = 0; j < n ; j++){

          let input = document.createElement('input');
          input.type = 'number';
          input.className = "valueInput";
          input.id = `input_${i + 1}${j + 1}`;
          container2.appendChild(input);

        }
      }
      
     
    while(outputContainer.firstChild)
      outputContainer.removeChild(outputContainer.firstChild);  

      for(let i = 0; i < m ; i++){

        outputContainer.appendChild(document.createElement('br'));
        
        for(let j = 0; j < n ; j++){

          let input = document.createElement('input');
          input.type = 'number';
          input.className = "valueInput";
          input.id = `input_${i + 1}${j + 1}`;
          outputContainer.appendChild(input);

        }
      }
      
}


function matrices(elementDOM) {

  let form = document.getElementById(elementDOM) || document.forms[0];
  var elems = form.elements;
  
  var serialized = [], i, len = elems.length;
  
  for(i = 0; i < len; i += 1) {
  
    var element = elems[i];
    var value = parseInt(element.value);
    
    serialized.push(value);
      
  }
  
  return serialized;

}

function sum(){
    let matriz1 = matrices('MatrixInputContainer1');
    let matriz2 = matrices('MatrixInputContainer2');
    let resultMatriz = [];
    for(var i = 0; i < matriz1.length; i++){
        resultMatriz.push(matriz1[i] + matriz2[i]);
    }
    return resultMatriz;
}

function res(){
    let matriz1 = matrices('MatrixInputContainer1');
    let matriz2 = matrices('MatrixInputContainer2');
    let resultMatriz = [];
    for(var i = 0; i < matriz1.length; i++){
        resultMatriz.push(matriz1[i] - matriz2[i]);
    }
    return resultMatriz;
}

function output(){
    let form = document.getElementById('MatrixOutContainer') || document.forms[0];
    var elems = form.elements;
    var serialized = [];
    let len = elems.length;
    let result = [];
    let operation = document.getElementById('operation').value;
    if(operation == "0"){
        result = sum();
    } else {
        result = res();
    }
    
    for(var i = 0; i < len; i += 1) {
        var element = elems[i];
        element.value = result[i];
    }
}

function clearInputs(){
  document.getElementById('MatrixInputContainer1').reset();
  document.getElementById('MatrixInputContainer2').reset();
  document.getElementById('MatrixOutContainer').reset();
}

