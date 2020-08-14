var answer = document.getElementById("answer");
var myDiv = document.getElementById("mainDiv");
var countInput = document.getElementById("nCount");
var number1,number2;
var power1,power2;
var nCount;
var nTries;
var answerBox = document.getElementById("answerP");
var correctAnswers=0;
var multString = document.getElementById("stringP");
var wrongAnswersBox = document.getElementById("wrongAnswers");
var selectedMethod;

var stopwatch = document.getElementById("stopwatch");
var timer = new Stopwatch(stopwatch);

var wrongAnswers = [];

answer.addEventListener("keydown", function (e) {
    if (e.keyCode === 13 && nTries>0){
        next();
        nTries--;
        if (nTries == 0){
            timer.stop();
            timer.showTime();
            answerBox.textContent = correctAnswers.toString() + " / " + nCount.toString() + " правильных ответов";
            countInput.value=nCount.toString();
            for(var i=0;i<wrongAnswers.length;i++){
                wrongAnswersBox.textContent += wrongAnswers[i] + "|";
            }
        }else{
            countInput.value=nTries.toString();
        }
    }
    
});

function next(){
    calculate();
    if (nTries==1){
        multString.textContent = "*условие* = ";
        answer.value="";
        document.getElementById("startBtn").style.visibility="visible";
        document.getElementById("startBtn").value="Начать заново";
    }else{
        getRandomNumbers();
        answer.value="";
    }
}

function calculate(){
    if (selectedMethod == 0){
        if (Math.abs(answer.value - Math.pow(number1,power1) * Math.pow(number2,power2)) < 0.0001){
            correctAnswers++;
        }else{
            wrongAnswers.push(number1.toString() + "^" + power1.toString() + " × " 
            + number2.toString() + "^" + power2.toString() + " = " 
            + (Math.pow(number1,power1) * Math.pow(number2,power2)).toString() + "("+ answer.value.toString() + ")");
        }
    }
}

function getRandomNumbers(){
    if (selectedMethod == 0){
        number1=getRandomInt(8)+2;
        number2=getRandomInt(8)+2;
        power1=getRandomInt(4);
        power2=getRandomInt(4);
        multString.textContent = number1.toString() + "^" + power1.toString() + " × " 
        + number2.toString() + "^" + power2.toString() + " = ";
    }
}
function generateNumbers(){
    if (negativeNumbers){
        if (Math.random() < 0.5){
            negativeRandom=true;
        } 
        else{
            negativeRandom=false;
        }
    }
    if (decimalNumbers){
        if (Math.random() < 0.5){
            decimalRandom=true;
        } 
        else{
            decimalRandom=false;
        }
    }
    if (decimalRandom) number1 = "0." + number1;
    if (negativeRandom) number1 = "-" + number1;
    
    
    if (negativeNumbers){
        if (Math.random() < 0.5){
            negativeRandom=true;
        } 
        else{
            negativeRandom=false;
        }
    }
    if (decimalNumbers){
        if (Math.random() < 0.5){
            decimalRandom=true;
        } 
        else{
            decimalRandom=false;
        }
    }
    if (decimalRandom) number2 = "0." + number2;
    if (negativeRandom) number2 = "-" + number2;
}
function start(){
    correctAnswers=0;
    wrongAnswers = [];
    nCount=countInput.value;
    wrongAnswersBox.textContent = "";
    selectedMethod = document.getElementById("selectBar").selectedIndex;
    console.log(selectedMethod);
    if (nCount>0){
        timer.reset();
        timer.start();
        nTries=nCount;
        getRandomNumbers();
        document.getElementById("startBtn").style.visibility="hidden";
    }
}
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}