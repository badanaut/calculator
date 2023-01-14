const deleteButton              = document.getElementById('delete');
const clearButton               = document.getElementById('clear');
const currentOperandElement     = document.getElementById('current-operand');
const previousOperandElement    = document.getElementById('previous-operand');
const numberButtons             = document.querySelectorAll(".numbers")
const operationButtons          = document.querySelectorAll(".operations")
const equalButton               = document.getElementById("equal")

class Calculator{
    constructor(previousOperandElement, currentOperandElement){
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement  = currentOperandElement;
        this.clearDisplay();        
    }

    appendNumber(number){
        if(this.currentOperand.includes(".") && number===".") return
        if(this.currentOperand==="" && number==="."){
            this.currentOperand="0.";
            return
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){

        if(this.currentOperand==='') return
        if(this.previousOperand!==''){
            this.operate();
        }
        this.operation       = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand  ='';
        

    }

    operate(){
        let result;
        let previousNr = parseFloat(this.previousOperand);
        let currentNr  = parseFloat(this.currentOperand);
        if(isNaN(previousNr) || isNaN(currentNr)) return

        switch(this.operation){
            case "+": 
                result = previousNr + currentNr;
                break;
            case "-": 
                result = previousNr - currentNr;
                break;
            case "×": 
                result = previousNr * currentNr;
                break;
            case "÷": 
                result = previousNr / currentNr;
                break;
            default:
                return
        }
        this.currentOperand  = result;
        this.previousOperand = '';
        this.operation       = undefined;

    }
    updateDisplay(){
        this.currentOperandElement.innerText  = this.currentOperand;
        if(this.operation != undefined){
            this.previousOperandElement.innerText = 
            `${this.previousOperand} ${this.operation}`;
        }
        else{
            this.previousOperandElement.innerText = "";
        }
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    clearDisplay(){
        this.currentOperand  = '';
        this.previousOperand = '';
        this.operation       = undefined;
    }
}


const calculator = new Calculator(previousOperandElement, currentOperandElement);


numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', () => {
        calculator.operate();
        calculator.updateDisplay();
})

clearButton.addEventListener('click', () => {
    calculator.clearDisplay();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})