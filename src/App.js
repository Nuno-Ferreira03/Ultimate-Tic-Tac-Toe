import "./assets/styles/App.css";
import Board from "./components/board/board.jsx";
import Bboard from "./components/bBoard/bBoard.jsx";
import Clock from "./components/timer/timer.jsx";
import ControlPanel from "./components/control-panel/control-panel.jsx";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(300);
  const [jogador1, setjogador1] = useState("");
  const [jogador2, setjogador2] = useState("");
  const [firstP, setFirstP] = useState("");
  const [peca, setPeca] = useState(true);
  const [showControlPanel, setShowControlPanel] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [hide, setHide] = useState("");
  const [hide1, setHide1] = useState("none");
  const [title, setTitle] = useState("h1-title");

  const handlePlay = () => {
    setShowControlPanel(true);
    setStartGame(false);
  };

  const handleStartGame = () => {
    setShowControlPanel(false);
    setStartGame(true);
    setHide("none");
    setTitle("title");
  };

  return (
    <>
      <div id="center">
        <div className="outer-container">
          <div className="inner-container">
            <div className="title-container">
              <h1 className={title} style={{ display: hide }}>
                {"<"} Ultimate Tic-Tac-Toe
              </h1>
              <span className="span">{">"}</span>
            </div>
            {!showControlPanel && !startGame && (
              <button className="button-jogo" onClick={handlePlay}>
                Jogar
              </button>
            )}
            {showControlPanel && !startGame && (
              <ControlPanel
                jogador1={jogador1}
                setjogador1={setjogador1}
                jogador2={jogador2}
                setjogador2={setjogador2}
                firstP={firstP}
                setFirstP={setFirstP}
                peca={peca}
                setPeca={setPeca}
                onStartGame={handleStartGame}
                hide1 = {hide1}
              />
            )}

            {startGame && (
              <Bboard
                time={time}
                setTime={setTime}
                jogador1={jogador1}
                jogador2={jogador2}
                firstP={firstP}
                setFirstP={setFirstP}
                peca={peca}
              ></Bboard>
            )}
          </div>
          <div className="clock-container">
            {startGame && <Clock time={time} setTime={setTime} />}
          </div>
          <div className="bottom-left">0</div>
          <div className="bottom-right">X</div>
        </div>
      </div>
    </>
  );
}

export default App;
