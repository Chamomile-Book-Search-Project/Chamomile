import { useState } from "react";
import React, { Component, useRef } from "react";
import Bannerlogo from "./images/Bannerlogo.png";
import "./Button.css";

function Header() {
  const photoInput = useRef();
  const [switchOn, switchChange] = useState(false);
  function switchstate() {
    switchChange(!switchOn);
  }
  return (
    <main className="container">
      <div
        style={{
          width: "105%",
          height: "3rem",
          backgroundColor: "#C5CBD6",
          display: "flex",
          position: "fixed",
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundImage:
            " linear-gradient(to top, #dde5f1 0%,#839DBB 100%)",
            height: "5rem",
            width: "100%",
            padding: "1rem",
          }}
          onClick={switchstate}
        >
          <div class="sizeChange">
            {/* <ul> */}
            {/* <li> */}
            <a href="#">
              <img
                src={Bannerlogo}
                style={{
                  height: "50px",
                }}
                alt="Logoimg"
              />
            </a>
            {/* </li> */}
            {/* </ul> */}
          </div>
        </div>
        </div>
        <input
          type="file"
          onChange={(e) => {
            window.location.reload();
          }}
          style={{ display: "none" }}
        />
        {switchOn === true ? window.location.reload() : null}
    </main>
  );
}
export default Header;
