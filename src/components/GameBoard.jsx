export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
              /* disable is to stop a sqaure from being filled twice. if the 'disabled' was passed alone as a standalone arguement, the squares cannot be filled. so you have to pass a conditional arguement {!playerSymbol}.
              passing a function to handleSelectSquare to control how the function works. */
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

/* const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
        const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]; //to target the objects in the array.
        updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol; // activePlayerSymbol is either X or O which is the symbol of the active player.
        return updatedGameBoard; // by using this method we are updating the state in an immutable way.
       /* {do not use this method} prevGameBoard[rowIndex][colIndex] = 'X'; // using the separate arrays, [colindex][rowindex] is to get hold of the rows and columns. x is to override the state.
        return prevGameBoard; 
    }); // goal is to update the previous state of the gameboard to the new state that the players have chosen. ie changes the null to either X or O.
    onSelectSquare(); // to execute a function that was called from outside of the gameboard component, inside of the gameboard component.
} */
