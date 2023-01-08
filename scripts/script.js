
//add
function add(a, b){
    return a+b;
}

// subtract
function subtract(a, b){
    return a-b;
}
// multiply
function multiply(a, b){
    return a*b;
}
// divide
function divide(a, b){
    return a/b;
}

function operate(a, b, operator){
    switch(operator){
        case "+": return add(a,b);
        case "-": return subtract(a,b);
        case "*": return multiply(a,b);
        case "/": return divide(a,b);
    }
}