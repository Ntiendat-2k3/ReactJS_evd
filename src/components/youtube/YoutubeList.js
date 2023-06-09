import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
     console.log(props); // obj {..., children, ..., ... type, .. }  -> chấm đến thuộc tính để gọi
     /// Layout: Header, Footer (component của tất cả các trang) ->
     /// -> props.children là những thứ thay đổi(nội dung) trong mỗi trang
     return (
          <div className="youtube-list">
               {props.children} {/* props.children: có nghĩa là chèn vào giữa component */}
               {YoutubeData.map((item, index) => (
                    <YoutubeItem
                         key={item.id}
                         image={item.image}
                         avt={item.avatar || item.image} // Nếu không có avt thì lấy item.image làm avt
                         title={item.title}
                         author={item.author}
                         className={index === 1 ? "abc" : ""}></YoutubeItem> // Chỉ cái thứ 2(index = 1) mới có class abc
               ))}
               {/* "avt", "image" phải đúng các đặt tên mà đã đặt ở props */}
          </div>
     );
};

export default YoutubeList;
