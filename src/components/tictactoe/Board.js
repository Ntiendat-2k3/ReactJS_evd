import React from "react";
import { calculateWinner } from "../../helpers";
import Cell from "./Cell";

const Board = (props) => {
     // Array(9).fill() -> [undefined,]  => đỡ phải tạo tận 9 cells , fill kết hợp vs map -> nhanh hơn
     /// console.log(props);   => Obj {..., cells[.....]} -> chấm đến để gọi 
     // const show = () => {
     //   const cells = [null, null, null, "X", "X", "X", null, null, null];
     //   console.log(calculateWinner(cells));
     // };
     return (
          <div className="game-board">
               {props.cells.map((item, index) => (
                    <Cell
                         key={index}
                         value={item}
                         onClick={() => props.onClick(index)} // onClick(đỏ) là props thuộc về component Cell
                         className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}></Cell>
               ))}
               {/* add class cho cell để style */}
          </div>
     );
};

export default Board;
