const content = document.getElementById("adding")
const addButton = document.getElementById('addingIntegers')
const subButton = document.getElementById('subbingIntegers')
const multButton = document.getElementById('multingIntegers')
const divButton = document.getElementById('divIntegers')
const question = document.getElementById('question')

const max = 10
const ex1 = Math.random() * max
const ex2 = Math.random() * max
const number1 = Math.floor(ex1)
const negative1 = Math.floor(ex2) * 2
const number2 = 0 - negative1;
const sum1 = number1 + number2;
const difference = number1 - number2;
const product = number1 * number2;
const quotient = number1 / number2;
const mathInput = document.getElementById("mathsub");
const text = document.getElementById("mathInput").value;
const correct = document.getElementById("correct")
const newques = document.getElementById("newques")




//Button//


addButton.onclick = function () {
content.textContent= "Adding Integers Or Negative and Positive"
question.textContent = `${number1} + ${number2}`
mathInput.onclick = function(){

const text = document.getElementById("mathInput").value;
if (text == sum1)
correct.textContent = "Correct";
else 
    correct.textContent = "Wrong";
}

newques.onclick = function() {
correct.textContent = "Waiting...";
let ex1 = Math.random() * max
 let ex2 = Math.random() * max
let number1 = Math.floor(ex1)
let negative1 = Math.floor(ex2) * 2
let number2 = 0 - negative1;
let sum1 = Math.floor(number1 + number2);
console.log(sum1)
question.textContent = `${number1} + ${number2}`
mathInput.onclick = function(){

const text = document.getElementById("mathInput").value;
if (text == sum1)
correct.textContent = "Correct";
else 
    correct.textContent = "Wrong";
}
}



}
subButton.onclick = function () {
content.textContent= "Subtracting Integers Negative and Positive"
question.textContent= `${number1} - ${number2}`
mathInput.onclick = function(){

const text = document.getElementById("mathInput").value;
if (text == difference)
correct.textContent = "Correct";
else 
    correct.textContent = "Wrong";
}

newques.onclick = function() {
correct.textContent = "Waiting...";
let ex1 = Math.random() * max
 let ex2 = Math.random() * max
let number1 = Math.floor(ex1)
let negative1 = Math.floor(ex2) * 2
let number2 = 0 - negative1;
let difference = Math.floor(number1 - number2);
console.log(difference)
question.textContent = `${number1} - ${number2}`
mathInput.onclick = function(){

const text = document.getElementById("mathInput").value;
if (text == difference)
correct.textContent = "Correct";
else 
    correct.textContent = "Wrong";
}
}

}
multButton.onclick = function () {
content.textContent= "Multiplying Integers Negative and Positive"
question.textContent= `${number1} * ${number2}`
mathInput.onclick = function(){

const text = document.getElementById("mathInput").value;
if (text == product)
correct.textContent = "Correct";
else 
    correct.textContent = "Wrong";
}

newques.onclick = function() {
correct.textContent = "Waiting...";
let ex1 = Math.random() * max
 let ex2 = Math.random() * max
let number1 = Math.floor(ex1)
let negative1 = Math.floor(ex2) * 2
let number2 = 0 - negative1;
let product = Math.floor(number1 * number2);
console.log(product)
question.textContent = `${number1} * ${number2}`
mathInput.onclick = function(){

const text = document.getElementById("mathInput").value;
if (text == product)
correct.textContent = "Correct";
else 
    correct.textContent = "Wrong";
}
}
}
divButton.onclick = function () {
content.textContent= "Dividing Integers or Negative and Positive"
question.textContent= `${number1} / ${number2}`
mathInput.onclick = function(){

const text = document.getElementById("mathInput").value;
if (text == quotient)
correct.textContent = "Correct";
else 
    correct.textContent = "Wrong";
}

newques.onclick = function() {
correct.textContent = "Waiting...";
let ex1 = Math.random() * max
let number1 = Math.floor(ex1) + 10
let negative1 = Math.floor(number1) / 2
let number2 = 0 - negative1;
let quotient = Math.floor(number1 / number2);
console.log(quotient)
question.textContent = `${number1} / ${number2}`
mathInput.onclick = function(){

const text = document.getElementById("mathInput").value;
if (text == quotient)
correct.textContent = "Correct";
else 
    correct.textContent = "Wrong";
}
}
}

 console.log(sum1)
//submit//
