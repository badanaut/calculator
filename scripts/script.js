const deleteBtn   = document.getElementById('delete');
const clearBtn    = document.getElementById('clear');
const zeroBtn     = document.getElementById('zero');
const oneBtn      = document.getElementById('one');
const twoBtn      = document.getElementById('two');
const threeBtn    = document.getElementById('three');
const fourBtn     = document.getElementById('four');
const fiveBtn     = document.getElementById('five');
const sixBtn      = document.getElementById('six');
const sevenBtn    = document.getElementById('seven');
const eightBtn    = document.getElementById('eight');
const nineBtn     = document.getElementById('nine');
const dotBtn      = document.getElementById('dot');
const divideBtn   = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const addBtn      = document.getElementById('add');
const equalBtn    = document.getElementById('equal');
const resultNr    = document.getElementById('result-nr');
const inputNr     = document.getElementById('input-nr');

add      = (a, b) => a+b;
subtract = (a, b) => a-b;
multiply = (a, b) => a*b;
divide   = (a, b) => a/b;

function operate(a, b, operator){
    switch(operator){
        case "+": return add(a,b);
        case "-": return subtract(a,b);
        case "*": return multiply(a,b);
        case "/": return divide(a,b);
    }
}

deleteBtn.addEventListener('click', ()=>{
    if(inputNr.textContent){
        inputNr.textContent = inputNr.textContent.slice(0, -1);
    }
})

clearBtn.addEventListener('click', () => {
    inputNr.textContent="";
    resultNr.textContent = "";})
