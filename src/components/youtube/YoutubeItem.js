import React from "react";

/// Props -> Properties Attribute -> Thay đổi giá trị
const YoutubeItem = (props) => {
     return (
          <div className={`youtube-item ${props.className}`}>
               <div className="youtube-image" style={{ height: "250px" }}>
                    <img
                         src={props.image}
                         alt=""
                         style={{
                              display: "block",
                              width: "100%",
                              height: "100%",
                              maxWidth: "100%",
                              objectFit: "cover", // Viết giống JSON  -> style inline {}1 -> curly, {}2 : obj để style
                         }}
                    />
               </div>
               <div className="youtube-footer">
                    <img src={props.avt} alt="" className="youtube-avatar" />
                    <div className="youtube-info">
                         <h3 className="youtube-title">
                              {props.title || "This is example of title"}
                         </h3>
                         <h4 className="youtube-author">
                              {props.author || "This is example of author"}
                         </h4>
                    </div>
               </div>
          </div>
     );
};

export default YoutubeItem;
