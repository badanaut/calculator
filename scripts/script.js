const deleteBtn   = document.getElementById('delete');
const clearBtn    = document.getElementById('clear');
const dotBtn      = document.getElementById('dot');
const divideBtn   = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const addBtn      = document.getElementById('add');
const equalBtn    = document.getElementById('equal');
const bigNr       = document.getElementById('big-nr');
const smallNr     = document.getElementById('small-nr');
const numbers     = document.querySelectorAll(".numbers")
const operations  = document.querySelectorAll(".operations")

let inputNumber="", n1="", n2="", result="";
let operator="", mathOperator="";

let getNumber = () => bigNr.textContent;

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

operations.forEach(function(btn){
    btn.addEventListener("click", function(e){
        operator = e.target.textContent;
        if(n1===""){
            n1=getNumber();
            smallNr.textContent = n1 + " " + operator;
            bigNr.textContent="";
            inputNumber="";
        }
        else if(n2===""){
            n2=getNumber();
            inputNumber="";
        }
        if(operator==="="){
            mathOperator=smallNr.textContent.slice(-1);
            n1 = Number(n1);
            n2 = Number(n2);
            result = operate(n1, n2, mathOperator)
            bigNr.textContent = result;
            smallNr.textContent = "";
            inputNumber="";
            n1=result;
            n2="";
            
        }

    });
});

deleteBtn.addEventListener('click', ()=>{
    if(bigNr.textContent){
        bigNr.textContent = bigNr.textContent.slice(0, -1);
    }
})

clearBtn.addEventListener('click', () => {
    smallNr.textContent="";
    bigNr.textContent = "0";})

numbers.forEach(function(button){
        button.addEventListener('click',(e) => {
            inputNumber += e.target.textContent;
            bigNr.textContent = inputNumber;
        });
    });



