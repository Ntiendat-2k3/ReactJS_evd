import React, { useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
     const [board, setBoard] = useState(Array(9).fill(null)); // Mảng 9 ptu là null
     const [xIsNext, setXIsNext] = useState(true);

     const winner = calculateWinner(board);
     const handleClick = (index) => {
          const boardCopy = [...board]; // clone để không ảnh hưởng tới mảng gốc
          if (winner || boardCopy[index]) return; // có ng chiến thắng thì dừng
          boardCopy[index] = xIsNext ? "X" : "O";
          setBoard(boardCopy); // update lại board
          setXIsNext(!xIsNext); // lần trc X , lần sau phải là O
     };
     const handleResetGame = () => {
          setBoard(Array(9).fill(null)); // set lại ban đầu
          setXIsNext(true); // khi reset auto X đc tích trước, không có nếu X win thì ván tiếp theo O sẽ đánh trc
     };
     return (
          <div>
               <Board cells={board} onClick={handleClick}></Board>
               {/* Nếu có winner mới hiện ng chs winner => để không bị khoảng trống do padding */}
               {winner && <div className="game-winner">Winner is {winner}</div>}
               <button className="game-reset" onClick={handleResetGame}>
                    Reset game
               </button>
          </div>
     );
};

export default Game;
