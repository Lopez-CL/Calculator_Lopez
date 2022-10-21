function infoPop(){
    alert("For this project I created a 4 founction calculator, meaning it can recieve numeric input, run basic arithmitic, clear, and output solution to arthmictic equation.");
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
    var a = parseInt(num1);
    var b = parseInt(num2);
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

12. Shift Array Values
shiftArrayValsLeft(arr)
Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr){
    for (var i = 0; i <= arr.length-1; i++){
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

console.log(shiftArrayValsLeft([1, 2, 3]));