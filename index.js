function togglePlayButtons() {
    const buttonsCont = document.getElementById('buttonsCont');
    buttonsCont.classList.toggle('hidden')
  }
  
  function startGame() {
    const startGameButton = document.getElementById('startGame');
    startGameButton.classList.add('hidden');
    togglePlayButtons()
  }

  
  function getWinner(computerDicision, playerDicision) {
    const tie = "TIE!";
    const playerWon = "YOU WON🎊";
    const computerWon = "COMPUTER WON💻";
    if (computerDicision == playerDicision) {
      return tie;
    }
    const emojies = ["✊", "✌️", "✋", "🦎", "🖖"]
    switch(computerDicision) {
      case 0:
        if (playerDicision == 1 || playerDicision == 3) {
          return computerWon;
        }
        return playerWon
      case 1:
        if (playerDicision == 2 || playerDicision == 3) {
          return computerWon;
        } 
        return playerWon
      case 2:
        if (playerDicision == 0 || playerDicision == 4) {
          return computerWon;
        } 
        return playerWon
    case 3:
        if (playerDicision == 4 || playerDicision == 2) {
            return computerWon;
        }
        return playerWon
    case 4:
      if (playerDicision == 0 || playerDicision == 1) {
        return computerWon;
      }
      return playerWon
      default:
    }
  }
  
  function addH2InContainer(innerText) {
    const container = document.getElementById('container')
    const myH2 = document.createElement('h2');
    myH2.innerText = innerText;
    container.appendChild(myH2);
  }
  
  function makeChoice(playerChoice) {
    const emojies = ["✊", "✌️", "✋", "🦎", "🖖"]
    const computerChoice = Math.round(Math.random()*4);
    const result = `COMPUTER ${emojies[computerChoice]} \n YOU ${emojies[playerChoice]}`
    addH2InContainer(result);
    togglePlayButtons();
    const winner = getWinner(computerChoice, playerChoice);
    addH2InContainer(winner);
    const startAgainBtn = document.getElementById('startAgain');
    startAgainBtn.classList.remove('hidden')
  }
  
  function removeH2(h2){
    h2.remove()
  }
  
  function playAgain() {
    togglePlayButtons();
    const container = document.getElementById('container')
    const h2Elements = container.querySelectorAll('h2');
    h2Elements.forEach(removeH2)
  }

  