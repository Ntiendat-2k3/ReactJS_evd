import React, { useState } from "react";
import "./ToggleStyles.css";
/// stateless functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
/// stateful functional component: component có sử dụng state
// function Toggle2() {
//   const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
     /// 1. enabling state: useState(initialize value)
     /// 2. initialize state: useState(false)
     /// 3. reading state:
     /// 4. update state  ( setAbc.. ) : set lại giá trị  "on"
     //! useState không được sử dụng trong loop, function component , if và phải được viết ở trên cùng
     // const array = useState(false);
     // console.log(array); // [ false (on), function (setOn) ]
     // console.log(array[0]);
     // console.log(array[1]);
     // const arr = [1, 2];
     // console.log(arr[0], arr[1]);
     // const [a, b] = [1, 2];  or = arr
     // console.log(a, b);
     /// initialize value: boolean(true, false), number(1,2,3,4), string("evondev"), undefined, null, [1,2,3,4], {title: "Frontend Developer"}
     // use destructuring
     const [on, setOn] = useState(false); //! Nguyên tắc của Hook là phải viết ở trên đầu; không đc viết trong loop, if , function component
     console.log(on);
     // console.log(on, setOn);
     // [title, setTitle]
     // [isActive, setIsActive]
     // [active, unactive] -> k nên , nên đặt setActive
     // <div className="toggle" onclick="toggle"></div>; => React: onClick
     // state changes -> re-render
     const handleToggle = (enable) => {
          // setOn(callback) -> setOn(prevState => !prevState) : ngược lại với giá trị trc đó
          // setOn((on) => {
          //   return !on;
          // });  OR:
          setOn((on) => !on); //: Ngược lại với cái trc đó

          // const [active, setActive] = useState(true);  không đc viết trong function => Sai
          // if (enable) {
          //   const [active, setActive] = useState(true);
          // }
     };
     return (
          <div>
               <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
                    <div className={`spinner ${on ? "active" : ""}`}></div>
               </div>

               {/* Click "On" "Off" mới chạy */}
               {/* <div className="toggle-control">
               <div className="toggle-on" onClick={() => setOn(true)}>
                    On      ==> ban đầu là false -> Click vào "On" là true vì setOn lại rồi  
               </div>
               <div className="toggle-off" onClick={() => setOn(false)}>
                    Off
               </div>
               </div> */}
          </div>
     );
}
export default Toggle;
