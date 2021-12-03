import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <div class="Parent">
      <div className="box">
        <h1 className="text">Don't forget your friends!!</h1>
        <div className="main">
          <div className="btn-add">
            <Link to="/fill" className="links">
              Add New Contact +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
