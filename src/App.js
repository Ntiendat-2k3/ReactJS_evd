import "./App.scss";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import Toggle from "./components/toggle/Toggle";

// import Feature from "./components/youtube/Feature";
// import YoutubeItem from "./components/youtube/YoutubeItem";
import YoutubeList from "./components/youtube/YoutubeList";

/// Components => Tái sử dụng (feature)

/// Props -> Properties Attribute -> Thay đổi giá trị  (Youtube)

/// Parent Component
const App = () => {
     // const numbers = [1, 2, 3, 4, 5];
     // const double = numbers.map((item) => item * 2);
     // console.log(double); // (5) [2, 4, 6, 8, 10]
     // console.log(YoutubeData);
     /// Nếu mà nhiều YoutubeItem quá nó sẽ rất rối => "Duyệt mảng" trong "YoutubeData(chứa các YoutubeItem)"
     const name = "evondev";
     return (
          <div>
               {/* Children Component */}
               {/* 1: Use Component */}
               {/* <Feature></Feature>
                    <Feature></Feature>
                    <Feature></Feature> */}

               {/* 2: Use Component & Props -> liệt kê xong thay */}
               {/* Thêm class youtube-list ở div bao ngoài trên kia để thấy rõ hơn */}
               {/* <YoutubeItem
                    image="https://i.pinimg.com/564x/1f/13/98/1f1398d3d24a910d700c539244e29962.jpg"
                    avt="https://i.pinimg.com/474x/df/8d/68/df8d68e9dce2fea314415d4e08519c5f.jpg"
                    author="Evondev"
                    title="Learning ReactJS"></YoutubeItem>
               <YoutubeItem
                    image="https://i.pinimg.com/236x/90/2a/f7/902af7eb22fed2b3b0577ecde940459a.jpg"
                    avt="https://i.pinimg.com/236x/f5/96/21/f5962105101ff495f21b98f99bb92268.jpg"
                    title="Learning ReactJS Level 1"></YoutubeItem> */}

               {/* 3 : Same Call API  -> gọi từ bên khác -> Thông dụng */}
               <YoutubeList>
                    {/* "map" qua toàn bộ YoutubeItem trong YoutubeData rồi cho vào YoutubeList để gọi cho gọn */}

                    {/* --Props Children-- : html, component, text, variable */}
                    {name}
               </YoutubeList>

               {/*  --------------------------------------------------------- */}
               {/* <Toggle></Toggle> */}

               {/* <Counter></Counter> */}

               <Game></Game>
          </div>
     );

     // const name = "evondev";
     // function fullName(firstName, lastName) {
     //   return `${firstName}  ${lastName}`;
     // }
     // return (
     // <div>
     //   <h1>Hello {name ==="evondev" ? "Dat" : "Nguyen"}</h1>
     //   <h2>{fullName('Nguyen Tien', 'Dat')}</h2>
     // </div>
     // );
};
export default App;
