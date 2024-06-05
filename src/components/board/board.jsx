import React from "react";
import { useState, useEffect } from "react";
import Square from "../square/square";
import calculateWinner from "../winner/vencedor";
import "./board.css";
function Board({
  onSquareClick,
  next,
  disableBoards,
  gameOver,
  bColor,
  onBoardStatusChange,
  peca,
}) {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState(next ? "X" : "O");
  const [color, setColor] = useState(Array(9).fill("white"));
  console.log(disableBoards);
  useEffect(() => {
    const updateColor = [...color];
    setCurrentPlayer(next ? "X" : "O");
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === "X") {
        updateColor[i] = "blue";
        setColor(updateColor);
      } else if (squares[i] === "O") {
        updateColor[i] = "red";
        setColor(updateColor);
      }
    }
    if (gameOver) {
      return;
    }
    if (gameOver == false) {
      onBoardStatusChange(`Next player: ${currentPlayer}`);
    }
  }, [next, squares, currentPlayer, onBoardStatusChange]);
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares) || gameOver) {
      return;
    }
    let nextSquares = squares.slice();
    nextSquares[i] = currentPlayer;

    setSquares(nextSquares);
    onSquareClick(nextSquares, currentPlayer);

    const newWinner = calculateWinner(nextSquares);
    if (newWinner) {
      onSquareClick(newWinner); // Passa o winner para o Bboard component
    } else {
    if(peca == true)
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }

  const winner = calculateWinner(squares);
  let status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

  return (
    <>
      <div className="board">
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            next={next}
            disabled={disableBoards}
            gameOver={gameOver}
            bColor={bColor}
            color={color[0]}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            next={next}
            disabled={disableBoards}
            gameOver={gameOver}
            bColor={bColor}
            color={color[1]}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            next={next}
            disabled={disableBoards}
            gameOver={gameOver}
            bColor={bColor}
            color={color[2]}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            next={next}
            disabled={disableBoards}
            gameOver={gameOver}
            bColor={bColor}
            color={color[3]}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            next={next}
            disabled={disableBoards}
            gameOver={gameOver}
            bColor={bColor}
            color={color[4]}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            next={next}
            disabled={disableBoards}
            gameOver={gameOver}
            bColor={bColor}
            color={color[5]}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            next={next}
            disabled={disableBoards}
            gameOver={gameOver}
            bColor={bColor}
            color={color[6]}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            next={next}
            disabled={disableBoards}
            gameOver={gameOver}
            bColor={bColor}
            color={color[7]}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            next={next}
            disabled={disableBoards}
            gameOver={gameOver}
            bColor={bColor}
            color={color[8]}
          />
        </div>
      </div>
    </>
  );
}

export default Board;
