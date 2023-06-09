import React from "react";

// object destructuring
// const student = {
//   name: 'evondev',
//   age: 28
// };
// const name = student.name;
// const age = student.age;
// const {name, age} = student;

const Cell = ({ value, onClick, className }) => {
     // props
     // console.log(props);
     /// { value, onClick, className } là ptu bên trong props nhưng dùng destructuring cho nhanh
     // viết rút gọn props =  destructuring  đỡ phải gọi 2 dòng dưới
     // const { value, onClick } = props;
     // console.log(value, onClick);
     return (
          <div className={`game-cell ${className}`} onClick={onClick}>
               {value}
          </div>
     );
     // bỏ đc props.value, props.onClick ở màu hồng nhạt
};

export default Cell;
