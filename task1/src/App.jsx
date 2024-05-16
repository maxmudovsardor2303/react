import React, { useState } from "react";
import people from "./assets/task1.png";
import main from "./assets/task2.png"
import footer from "./assets/task3.png"
import header from "./assets/task4.png"
function App() {


  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">
              {" "}
              <li>
                <a href="#">Blog</a>
              </li>
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="container-item">
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button className=" button ">Download Resume</button>
        </div>
        <img src={people} />
      </div>

      <div className="wrapper-container">
        <h4>Recent posts</h4>
        <div className="wrapper-box">
          <div className="wrapper-item">
            <h2>Making a design system from scratch</h2>
            <span>12 Feb 2020 | Design, Pattern</span>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="wrapper-item">
            <h2>Creating pixel perfect icons in Figma</h2>
            <span>12 Feb 2020 | Figma, Icon Design</span>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>


      <div className="shelov">
        <h4>Works</h4>
        <div className="ming-body">
          <div className="main-img">
            <img src={main} />
          </div>
          <div className="shadov">
            <h2>Designing Dashboards</h2>
            <div className="shelov_box">
              <span>2020</span>
              <p>Dashboard</p>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
      <hr/>



      <div className="shelov">
        <div className="ming-body">
          <div className="main-img">
            <img src={footer} />
          </div>
          <div className="shadov">
            <h2>Vibrant Portraits of 2020</h2>
            <div className="shelov_box">
              <span>2018</span>
              <p>Illustration</p>
            </div>
            <p>  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
      <hr/>



      <div className="shelov">
        <div className="ming-body">
          <div className="main-img">
            <img src={header} />
          </div>
          <div className="shadov">
            <h2>36 Days of Malayalam type</h2>
            <div className="shelov_box">
              <span>2018</span>
              <p>Typography</p>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
      <hr/>
    </>

  


  );
}

export default App;