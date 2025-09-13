import React from "react";
// import luxuryCar from "../assets/luxury-car.jpg";
import cityImage from "../assets/ai.jpg";
import dotsImage from "../assets/menu-vertical.png";
import heartsImage from "../assets/hearts.png";
import heartImage from "../assets/heart.png";
import commentImg from "../assets/comment.png";
import commentsImg from "../assets/speech-bubble.png";
import shareImg from "../assets/share.png";
import shareImgage from "../assets/share(1).png";

const Post = ({ data, bgColor, color, toggle }) => {
  return (
    <>
      <div
        className="post_container"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        <div className="person">
          <div className="author">
            <div className="image">
              <img className="carImage" src={data.pImg} />
            </div>
            <div className="text">
              <h3>{data.userName}</h3>
              <p>{data.title}</p>
            </div>
          </div>
          <div className="dot">
            <img className="dotsImg" src={dotsImage} />
          </div>
        </div>
        <p>{data.description}</p>
        <div className="post_img">
          <img className="cityImg" src={data.mImg} />
        </div>
        <div className="like_comment">
          <div className="likes item">
            {toggle ? (
              <img className="images" src={heartImage} />
            ) : (
              <img className="images" src={heartsImage} />
            )}
            <p>{data.like} K</p>
          </div>
          <div className="comments item">
            {toggle ? (
              <img className="images" src={commentsImg} />
            ) : (
              <img className="images" src={commentImg} />
            )}

            <p>{data.comment} K</p>
          </div>
          <div className="share item">
            {toggle ? (
              <img className="images" src={shareImgage} />
            ) : (
              <img className="images" src={shareImg} />
            )}

            <p>{data.share} K</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
