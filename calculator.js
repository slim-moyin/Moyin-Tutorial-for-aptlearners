let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

// for number Inputs

btnSpread.forEach((button, i) => {
    button.addEventListener("click", () => {
        //Inner Values for Calculator
        
        if(resultBox.innerHTML == "0"){
            resultBox.innerHTML ="";
        }
    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
    });
});

// Function to evaluate strings

function evaluate(fn){
    return new Function('return' + fn)();
}

// To calculate all functions

total.addEventListener('click', () => {
    let allInputs = resultBox.innerHTML;

    resultBox.innerHTML = evaluate(allInputs);
    
    console.log(evaluate(allInputs));
});

// clear all Inputs
 clearBtn.addEventListener('click', () => {
    resultBox.innerHTML ='0'
 });''