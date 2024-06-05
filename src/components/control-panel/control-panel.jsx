import React from "react";
import { useState } from "react";
import "./control-panel.css";

function ControlPanel({
  onStartGame,
  jogador1,
  setjogador1,
  jogador2,
  setjogador2,
  firstP,
  setFirstP,
  peca,
  setPeca,
  hide1,
}) {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(random(0, 1));
  const handlePlayer1Change = (event) => {
    const nome = event.target.value;
    setjogador1(nome);
  };

  const handlePlayer2Change = (event) => {
    const nome = event.target.value;
    setjogador2(nome);
  };
  
  const handleStartGame = () => {
    if (jogador1 != "" && jogador2 != "") onStartGame();
  };

  if (random(0, 1) === 0) {
    console.log();
    setFirstP(jogador1);
  } else {
    setFirstP(jogador2);
  }

  if (random(0, 1) === 0) {
    setPeca(true);
  } else {
    setPeca(false);
  }

  return (
    <div className="control-panel">
      
      <input
        type="text"
        placeholder="Nome Jogador 1"
        value={jogador1}
        onChange={handlePlayer1Change}
      />
      <input
        type="text"
        placeholder="Nome Jogador 2"
        value={jogador2}
        onChange={handlePlayer2Change}
      />
      <div>
      {jogador1 && jogador2 ? <button className="jogo-button" onClick={handleStartGame}>
          Iniciar Jogo
        </button>: <div></div>}
      </div>
    </div>
  );
}

export default ControlPanel;
