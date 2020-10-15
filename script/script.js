function clearAll(element) {
    document.querySelector(element + " .dice-dot-1").style.visibility = "hidden";
    document.querySelector(element + " .dice-dot-2").style.visibility = "hidden";
    document.querySelector(element + " .dice-dot-3").style.visibility = "hidden";
    document.querySelector(element + " .dice-dot-4").style.visibility = "hidden";
    document.querySelector(element + " .dice-dot-5").style.visibility = "hidden";
    document.querySelector(element + " .dice-dot-6").style.visibility = "hidden";
    document.querySelector(element + " .dice-dot-7").style.visibility = "hidden";
    document.querySelector(element + " .dice-dot-8").style.visibility = "hidden";
    document.querySelector(element + " .dice-dot-9").style.visibility = "hidden";
    // document.querySelector(".diceB-dot-1").style.display = "none";
    // document.querySelector(".diceB-dot-2").style.display = "none";
    // document.querySelector(".diceB-dot-3").style.display = "none";
    // document.querySelector(".diceB-dot-4").style.display = "none";
    // document.querySelector(".diceB-dot-5").style.display = "none";
    // document.querySelector(".diceB-dot-6").style.display = "none";
    // document.querySelector(".diceB-dot-7").style.display = "none";
    // document.querySelector(".diceB-dot-8").style.display = "none";
    // document.querySelector(".diceB-dot-9").style.display = "none";
}

function rollOne(element) {
    // element will contain .diceA div or .diceB div element
    document.querySelector(element + " .dice-dot-5").style.visibility = "visible";
}

function rollTwo(element) {
    // element will contain .diceA div or .diceB div element
    document.querySelector(element + " .dice-dot-1").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-9").style.visibility = "visible";
}

function rollThree(element) {
    // element will contain .diceA div or .diceB div element
    document.querySelector(element + " .dice-dot-1").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-5").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-9").style.visibility = "visible";
}

function rollFour(element) {
    // element will contain .diceA div or .diceB div element
    document.querySelector(element + " .dice-dot-1").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-3").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-7").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-9").style.visibility = "visible";
}

function rollFive(element) {
    // element will contain .diceA div or .diceB div element
    document.querySelector(element + " .dice-dot-1").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-3").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-5").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-7").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-9").style.visibility = "visible";
}

function rollSix(element) {
    // element will contain .diceA div or .diceB div element
    document.querySelector(element + " .dice-dot-1").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-3").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-4").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-6").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-7").style.visibility = "visible";
    document.querySelector(element + " .dice-dot-9").style.visibility = "visible";
}

function DiceyDice() {
    document.getElementsByTagName("body")[0].classList.remove("confetti");
    document.getElementsByTagName("h1")[0].innerText = "Who wins?";
    clearAll(".diceA div");
    clearAll(".diceB div");
    document.querySelector(".diceA").classList.add("shake-effect");
    document.querySelector(".diceB").classList.add("shake-effect");
    setTimeout(decideWinner, 3000);
}

function decideWinner() {
    var randomDiceA = Math.random();
    var randomDiceB = Math.random();
    var diceA = Math.floor(randomDiceA * 6) + 1;
    var elementA = ".diceA div";

    switch(diceA){
        case 1: rollOne(elementA);break;
        case 2: rollTwo(elementA);break;
        case 3: rollThree(elementA);break;
        case 4: rollFour(elementA);break;
        case 5: rollFive(elementA);break;
        case 6: rollSix(elementA);break;
    }
    var diceB = Math.floor(randomDiceB * 6) + 1;
    var elementB = ".diceB div";
    switch(diceB) {
        case 1: rollOne(elementB);break;
        case 2: rollTwo(elementB);break;
        case 3: rollThree(elementB);break;
        case 4: rollFour(elementB);break;
        case 5: rollFive(elementB);break;
        case 6: rollSix(elementB);break;
    }
    document.querySelector(".diceA").classList.remove("shake-effect");
    document.querySelector(".diceB").classList.remove("shake-effect");
    var winner = "";
    if(diceA > diceB) {
        winner = "Player 1 is the winner!";
        document.getElementsByTagName("body")[0].classList.add("confetti");
    }
    else if(diceB > diceA){
        winner = "Player 2 is the winner!";
        document.getElementsByTagName("body")[0].classList.add("confetti");
    }
    else {
        winner = "It is a draw, roll again!";
    }
    document.getElementsByTagName("h1")[0].innerHTML = winner;
}

function resetDice() {
    clearAll(".diceA div");
    clearAll(".diceB div");
    rollSix(".diceA div");
    rollSix(".diceB div");
}

function confetti() {

}
