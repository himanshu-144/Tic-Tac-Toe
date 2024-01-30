import Box from "./Box";
import React, { useState } from "react";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (value[a] !== null && value[a] === value[b] && value[b] === value[c]) {
        return value[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    const copyValue = [...value];
    copyValue[index] = isXTurn ? "X" : "O";
    setValue(copyValue);
    setIsXTurn(!isXTurn);
  };

  const handlePlayAgain = () => {
    setValue(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <div style={{ display: "flex", gap: "5px" }}>
          <span style={{ fontSize: "30px" }}>{isWinner} Won The Game</span>
          <button
            onClick={handlePlayAgain}
            style={{
              padding: "8px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <h1 style={{textAlign:'center'}}>Tic-Tac-Toe</h1>
          <h1 style={{ textAlign: "center", margin: "5px 0px" }}>
            {isXTurn ? "X" : "O"}-Turn
          </h1>
          <div className="board-row">
            <Box onClick={() => handleClick(0)} value={value[0]} />
            <Box onClick={() => handleClick(1)} value={value[1]} />
            <Box onClick={() => handleClick(2)} value={value[2]} />
          </div>
          <div className="board-row">
            <Box onClick={() => handleClick(3)} value={value[3]} />
            <Box onClick={() => handleClick(4)} value={value[4]} />
            <Box onClick={() => handleClick(5)} value={value[5]} />
          </div>
          <div className="board-row">
            <Box onClick={() => handleClick(6)} value={value[6]} />
            <Box onClick={() => handleClick(7)} value={value[7]} />
            <Box onClick={() => handleClick(8)} value={value[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
