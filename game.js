// Iteration 2: Generate 2 random number and display it on the screen

const number1Element = document.getElementById("number1");
const number2Element = document.getElementById("number2");

var randomNumber1 = Math.floor(Math.random() * 100) + 1;
var randomNumber2 = Math.floor(Math.random() * 100) + 1;

number1Element.textContent = randomNumber1;
number2Element.textContent = randomNumber2;



// Iteration 3: Make the options button functional

var crocodileOne = document.getElementById('greater-than')
var crocodileTwo = document.getElementById('lesser-than')
var equalSymbol = document.getElementById('equal-to')
var score = 0
crocodileOne.onclick = () => {
    timer = 6
    if (randomNumber1 > randomNumber2) {
        score += 1
        countDown()
        localStorage.setItem('score',score)
        
    }
    else{
        window.location.href = 'gameover.html'
    }
    randomNumber1 = Math.floor(Math.random() * 100) + 1;
    number1Element.textContent = randomNumber1;
    
    randomNumber2 = Math.floor(Math.random() * 100) + 1;
    number2Element.textContent = randomNumber2;
}

crocodileTwo.onclick = () => {
    timer = 6
    if (randomNumber1 < randomNumber2) {
        score += 1
        countDown()
        localStorage.setItem('score',score)
        
    }
    else{
        window.location.href = 'gameover.html'
    }
    randomNumber1 = Math.floor(Math.random() * 100) + 1;
    number1Element.textContent = randomNumber1;
    
    randomNumber2 = Math.floor(Math.random() * 100) + 1;
    number2Element.textContent = randomNumber2;
}

equalSymbol.onclick = () => {
    timer = 6
    if (randomNumber1 == randomNumber2) {
        score += 1
        countDown()
        localStorage.setItem('score',score)
        
    }
    else{
        window.location.href = 'gameover.html'
    }
    randomNumber1 = Math.floor(Math.random() * 100) + 1;
    number1Element.textContent = randomNumber1;
    
    randomNumber2 = Math.floor(Math.random() * 100) + 1;
    number2Element.textContent = randomNumber2;
}
console.log(score)
// Iteration 4: Build a timer for the game

var timer = 6
var timerDiv = document.getElementById('timer')
function countDown(){
    if(timer>0){
        timer--
        timerDiv.textContent = timer
    }
    else{
        window.location.href = 'gameover.html'
    }
    
}
setInterval(countDown, 1000);

