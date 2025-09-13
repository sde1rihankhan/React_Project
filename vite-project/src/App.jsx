import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";
import { data, data2 } from "./data";

const App = () => {
  const [bgColor, setbgColor] = useState("#232D3f");
  const [color, setColor] = useState("white");
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(prevtoggle=>{
      const newToggle = !prevtoggle;

    // setToggle(!toggle);
    if (newToggle) {
      setbgColor("rgb(255,255,255)");
      setColor("black");
      document.querySelector("body").style.backgroundColor = "#cbc5c5";
    } else {

      setbgColor("#232D3f");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "black";
    }
    return newToggle;
  });
  };
  
  return (
    <>
      <Navbar
        bgColor={bgColor}
        color={color}
        toggleButton={toggleButton}
        toggle={toggle}
      />
      <div className="container">
        <div className="side_bar">
          <Sidebar bgColor={bgColor} color={color} toggle={toggle} />
        </div>
        <div className="post_section">
          {data.map((data) => (
            <Post key={data.id} data={data} bgColor={bgColor} color={color} toggle={toggle} />
          ))}
        </div>
        <div className="right_bar">
          {data2.map((data2) => (
            <Rightbar
              key={data2.id}
              data2={data2}
              bgColor={bgColor}
              // color={color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
