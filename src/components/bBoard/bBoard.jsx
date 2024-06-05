import React, { useEffect } from "react";
import { useState } from "react";
import Board from "../board/board";
import "../board/board.css";
import "../bBoard/bBoard.css";
import calculateWinner from "../winner/vencedor";
import Clock from "../timer/timer";

function Bboard({ jogador1, jogador2, firstP, peca, time, setTime }) {
  const [next, setnext] = useState(true);
  const [Bboard, setBboard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [gameOver, setGameOver] = useState(false);
  const [bColor, setBColor] = useState(Array(9).fill("#ffcd75"));
  const [status, setStatus] = useState("");
  const [first, setFirst] = useState(true);
  const [teste, setTeste] = useState(true);

  console.log(peca);

 function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleBoardStatus = (status) => {
    setStatus(status);
  };
  function handleBoardWinner(winner, position) {
    let nextBoard = [...Bboard];
    if(peca === true){
      nextBoard[position] = next ? "X" : "O";
    }

    setBboard(nextBoard);
    setnext((prevState) => !prevState);
    console.log(next);
    const newWinner = calculateWinner(nextBoard);
    if (winner) {
      setBboard((prevBboard) => {
        // Cria uma copia do Bboard array
        const newBboard = [...prevBboard];
        //mete o valor do winner na posicao que aconteceu no array
        newBboard[position] = winner;
        // Return o array
        return newBboard;
      });
      console.log(gameOver);
    }
  }
  useEffect(() => {
    if (peca === false) {
      setnext(false);
      if (firstP === jogador1) {
        setTeste(true);
      } else {
        setTeste(false);
      }
    }
  }, [peca]);

  useEffect(() => {
    const updatedColor = [...bColor];
    console.log(updatedColor);
    for (let i = 0; i < Bboard.length; i++) {
      if (Bboard[i] === "X") {
        updatedColor[i] = "lightblue";
        setBColor(updatedColor);
      } else if (Bboard[i] === "O") {
        updatedColor[i] = "salmon";
        setBColor(updatedColor);
      }
    }
    if (gameOver == false) {
      if (first === true) {
        setStatus(`Next player: ${firstP} (${next ? "X" : "O"})`);
        setFirst(false);
      }
      if (first === false && teste === true) {
        setStatus(`Next player: ${jogador1} (${next ? "X" : "O"})`);
        setTeste(false);
      } else {
        setStatus(`Next player: ${jogador2} (${next ? "X" : "O"})`);
        setTeste(true);
      }
    }
    if (calculateWinner(Bboard) != null) {
      setGameOver(true);
      if (calculateWinner(Bboard)) {
        setTime(0);
        if (calculateWinner(Bboard) === "X" && peca === true) {
          setStatus(`Winner: ${firstP}(${calculateWinner(Bboard)})`);
        }
        if (calculateWinner(Bboard) === "O" && peca === false) {
          setStatus(`Winner: ${firstP}(${calculateWinner(Bboard)})`);
        }

        console.log("Vencedor: " + calculateWinner(Bboard));
      }
    }
  }, [gameOver, Bboard, next]);

  useEffect(() => {
    if (time <= 0) {
      setGameOver(true);

      if (calculateWinner(Bboard)) {
        if (calculateWinner(Bboard) === "X" && peca === true) {
          setStatus(`Winner: ${firstP}(${calculateWinner(Bboard)})`);
        }
        if (calculateWinner(Bboard) === "O" && peca === false) {
          setStatus(`Winner: ${firstP}(${calculateWinner(Bboard)})`);
        }
      } else {
        let countX = 0,
          countO = 0;
        for (let i = 0; i < Bboard.length; i++) {
          if (Bboard[i] === "X") {
            countX++;
          } else if (Bboard[i] === "O") {
            countO++;
          }
        }
        if (countX > countO) {
          if (peca === true) {
            setStatus(`Winner: ${firstP}(X)`);
          }
          if (peca === false) {
            setStatus(`Winner: ${firstP}(O)`);
          }
        } else {
          if (peca === true) {
            setStatus(`Winner: ${firstP}(X)`);
          }
          if (peca === false) {
            setStatus(`Winner: ${firstP}(O)`);
          }
        }
      }
    }
  }, [time]);

  return (
    <div className="game">
      <div>
        <Board
          onSquareClick={(winner) => handleBoardWinner(winner, 0)}
          next={next}
          disableBoards={gameOver}
          bColor={bColor[0]}
          status={status}
          onBoardStatusChange={handleBoardStatus}
          peca = {peca}
        />
        <Board
          onSquareClick={(winner) => handleBoardWinner(winner, 3)}
          next={next}
          disableBoards={gameOver}
          bColor={bColor[3]}
          onBoardStatusChange={handleBoardStatus}
        />
        <Board
          onSquareClick={(winner) => handleBoardWinner(winner, 6)}
          next={next}
          disableBoards={gameOver}
          bColor={bColor[6]}
          onBoardStatusChange={handleBoardStatus}
        />
      </div>
      <div>
        <Board
          onSquareClick={(winner) => handleBoardWinner(winner, 1)}
          next={next}
          disableBoards={gameOver}
          bColor={bColor[1]}
          onBoardStatusChange={handleBoardStatus}
        />
        <Board
          onSquareClick={(winner) => handleBoardWinner(winner, 4)}
          next={next}
          disableBoards={gameOver}
          bColor={bColor[4]}
          onBoardStatusChange={handleBoardStatus}
        />
        <Board
          onSquareClick={(winner) => handleBoardWinner(winner, 7)}
          next={next}
          disableBoards={gameOver}
          bColor={bColor[7]}
          onBoardStatusChange={handleBoardStatus}
        />
      </div>
      <div>
        <Board
          onSquareClick={(winner) => handleBoardWinner(winner, 2)}
          next={next}
          disableBoards={gameOver}
          bColor={bColor[2]}
          onBoardStatusChange={handleBoardStatus}
        />
        <Board
          onSquareClick={(winner) => handleBoardWinner(winner, 5)}
          next={next}
          disableBoards={gameOver}
          bColor={bColor[5]}
          onBoardStatusChange={handleBoardStatus}
        />
        <Board
          onSquareClick={(winner) => handleBoardWinner(winner, 8)}
          next={next}
          disableBoards={gameOver}
          bColor={bColor[8]}
          onBoardStatusChange={handleBoardStatus}
        />
        <div className="status-container">
          <div className="status">{status}</div>
        </div>
      </div>
    </div>
  );
}

export default Bboard;
