function infoPop(){
    alert("For this project I created a 4 founction calculator, meaning it can recieve numeric input, run basic arithmitic, clear, and output solution to arthmitic equation.");
}

setTimeout(infoPop, 100);
var displayNum = document.querySelector("#display");
var num1 = "";
var num2 = "";
var opperator = "";
var sol = 0;

function press(num){
    num2 += num;
    displayNum.innerText = num2;
    console.log(num1);
    
}

function setOP(opp){
    opperator = opp;
    console.log(opperator);
    num1 = num2;
    num2 = "";
}
function clr(){
    num1 = "";
    num2 = "";
    opperator = "";
    displayNum.innerText = "0";
}

function calculate(){
    var a = parseFloat(num1);
    var b = parseFloat(num2);
    if (opperator === "+"){
        sol = a + b;
    }
    if (opperator === "-"){
        sol = a - b;
    }
    if (opperator === "*"){
        sol = a * b;
    }
    if (opperator === "/"){
        sol = a / b;
    }
    opperator = "";
    num2 = sol;
    displayNum.innerText = sol;
}
