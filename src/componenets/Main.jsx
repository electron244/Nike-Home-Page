import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <main>
      <section className="first">
        <div className="content">
          <div className="heading">
            <h1>YOUR FEET DESERVE THE BEST</h1>
          </div>
          <div className="text">
            <p>
              YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn1 btn">Shop Now</button>
          <button className="btn2 btn">Category</button>
        </div>
        <div className="logos">
          <p>Also Available On</p>
          <div className="logo">
            <img src="../public/flipkart.png" alt="" className="online" />
            <img src="../public/amazon.png" alt="" className="online" />
          </div>
        </div>
      </section>

      <section className="second">
        <img src="../public/shoe.png" className="photo" alt=""  />
      </section>
    </main>
  );
};

export default Main;
