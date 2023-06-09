import React, { useEffect, useState } from "react";
//! Truy xuất biến ở bên ngoài function gọi là Closure
const Counter = () => {
  // stale state
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount(count + 1);  => không đc; nhấn 5 lần kết quả vẫn là count = 0 -> +1 -> = 1 (closure)
  //:    setCount((count) => count + 1); sử dụng callback để khắc phục closure (Giá trị mới phải dựa vào giá trị trc đó)
  //   }, 1000);
  // };
  const [info, setInfo] = useState({
    firstName: "tran",
    lastName: "tuan",
  });

  useEffect(() => {
    console.log("from input");
  }, [info.lastName]);

  // useEffect(() => {
  //   // setCount(count + 1);
  //   console.log(`count: ${count}`);
  // }, [count]);
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white ">
        Increment
      </button>
    </div>
  );
};

export default Counter;
