function diceRoll() {
    const diceOne = document.getElementById('diceOne');
    const diceTwo = document.getElementById('diceTwo');
    const totall = document.getElementById('total');
    const dice1val = Math.floor(Math.random()*6)+1;
    const dice2val = Math.floor(Math.random()*6)+1;
    const total = dice1val + dice2val;
    diceOne.textContent = dice1val;
    diceTwo.textContent = dice2val;
    totall.textContent = total;
}