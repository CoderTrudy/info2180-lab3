document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".square");
    const status = document.getElementById("status");
    const resetButton = document.querySelector(".btn");
  
    let currentPlayer = "X";
    let gameOver = false;
  
  
    function handleSquareClick(event) {
      const square = event.target;
      if (!gameOver && square.textContent === "") {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        if (checkWin()) {
          gameOver = true;
          status.textContent = `Congratulations ${currentPlayer} is the Winner! 🎉`;
          status.classList.add("you-won");
        } else if ([...squares].every((square) => square.textContent !== "")) {
          gameOver = true;
          status.textContent = "It's a draw!";
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          status.textContent = `Player ${currentPlayer}'s turn`;
        }
      }
    }

    squares.forEach(square => {
        square.addEventListener("mouseenter", function() {
          square.style.backgroundColor = "lightgray";
        });
    
     
        square.addEventListener("mouseleave", function() {
          square.style.backgroundColor = ""; 
        });
      });
      
  
   
    function checkWin() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      return winPatterns.some((pattern) =>
        pattern.every((index) => squares[index].classList.contains(currentPlayer))
      );
    }
  

    function resetGame() {
      squares.forEach((square) => {
        square.textContent = "";
        square.classList.remove("X", "O");
      });
      currentPlayer = "X";
      gameOver = false;
      status.textContent = "Move your mouse over a square and click to play an X or an O.";
      status.classList.remove("you-won");
    }
  
    
    squares.forEach((square) => square.addEventListener("click", handleSquareClick));
  
    
    resetButton.addEventListener("click", resetGame);
  
    
    resetGame();
  });
  