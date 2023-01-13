const deleteBtn   = document.getElementById('delete');
const clearBtn    = document.getElementById('clear');
const bigNr       = document.getElementById('big-nr');
const smallNr     = document.getElementById('small-nr');
const numbers     = document.querySelectorAll(".numbers")
const operations  = document.querySelectorAll(".operations")

let inputNumber="", n1="", n2="", result="", operator="", mathOperator="";

let getNumber = () => bigNr.textContent;

add      = (a, b) => Number.isInteger(a+b) ? a+b : (a+b).toFixed(2);
subtract = (a, b) => Number.isInteger(a-b) ? a-b : (a-b).toFixed(2);
multiply = (a, b) => Number.isInteger(a*b) ? a*b : (a*b).toFixed(2);
divide   = (a, b) => Number.isInteger(a/b) ? a/b : (a/b).toFixed(2);

function operate(a, b, operator){
    switch(operator){
        case "+": return add(a,b);
        case "-": return subtract(a,b);
        case "×": return multiply(a,b);
        case "÷": return divide(a,b);
    }
}

function displayResult(operator){

    if(smallNr.textContent.slice(-1)==="="){
        n1=getNumber();
        smallNr.textContent = n1 + " " + operator;
        bigNr.textContent="";
        inputNumber="";
    }

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
    
    
    if(operator==="=" || (n1!="" && n2!="")){
        mathOperator=smallNr.textContent.slice(-1);
        n1 = Number(n1);
        n2 = Number(n2);
        result = operate(n1, n2, mathOperator)
        smallNr.textContent = n1 + mathOperator + n2 + " =";
        bigNr.textContent = result;
        inputNumber="";
        n1="";
        n2="";            
    }
}


operations.forEach(function(btn){
    btn.addEventListener("click", function(e){
        operator = e.target.textContent;
        if(operator==="=" && bigNr.textContent==="0"){
            inputNumber="0";
            bigNr.textContent="0"
        }else{
            displayResult(operator);
        }
    });
});

deleteBtn.addEventListener('click', ()=>{
    if(bigNr.textContent.length===1 || bigNr.textContent===""){
        bigNr.textContent = "0";
        inputNumber="0"
    }else{
        bigNr.textContent = bigNr.textContent.slice(0, -1);
    }
})

clearBtn.addEventListener('click', () => {
    smallNr.textContent="";
    bigNr.textContent = "0";
    inputNumber=""})

numbers.forEach(function(button){
        button.addEventListener('click',(e) => {
            if(e.target.textContent==="." && bigNr.textContent==="0"){
                inputNumber = "0.";
            }
            else if(e.target.textContent==="0" && bigNr.textContent==="0"){
                inputNumber = "0";
            }
            else if(bigNr.textContent==="0"){
                inputNumber="";
                inputNumber += e.target.textContent;
            }else if(bigNr.textContent.indexOf(".")!==-1 && e.target.textContent==="."){
                inputNumber=getNumber();
            }
            else{
                inputNumber += e.target.textContent;
            }
            
            bigNr.textContent = inputNumber;
        });
    });



