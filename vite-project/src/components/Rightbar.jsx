import React from "react";

const Rightbar = ({ data2, bgColor, color }) => {
  return (
    <>
      <div
        className="right_Container"
        style={{ backgroundColor: `${bgColor}`, color: `${color}`, }}
      >
        <div className="postImg">
          <img id="img" src={data2.img} />
          <div className="inside_img">
            <div className="img">
              <img src={data2.authorImg} />
            </div>
            <div className="tixt">
              <h2>{data2.authorName}</h2>
              <p>{data2.authortext}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
