import React from "react";
import Layout from "../Layout/Layout";
import "./Enroll.css";

const Enroll = () => {
  return (
   <Layout>
     <div className="enroll">
      <div className="enroll-text">
        <h1>LEARN SKILLS WITH BEST TEACHERS</h1>
        <small>Web Design / Graphic Design / Programming Language / Video Editing </small>
      </div>
      <div className="enroll-input-div">
        <div>
            <h2>Give Information For Enrollment</h2>
        </div>
        <div className="info-div">
        <small>YOUR FIRST NAME:</small>
        <input className="enrol-input" type='text'></input>
        </div>
        <div className="info-div">
        <small>YOUR LAST NAME:</small>
        <input className="enrol-input" type='text'></input>
        </div>
        <div className="info-div">
        <small>YOUR E-MAILE:</small>
        <input className="enrol-input" type='email'></input>
        </div>
        <div className="info-div">
        <small>YOUR COUNTRY:</small>
        <input className="enrol-input" type='text'></input>
        </div>
        <div className="info-div">
        <small>SELECT THE COURSE:</small>
        <select className="enrol-input">
            <option className="enrol-input"></option>
            <option className="enrol-input">Web Design</option>
            <option className="enrol-input">Graphic Design</option>
            <option className="enrol-input">Programming </option>
            <option className="enrol-input">Video Editing</option>
        </select>
        </div>
        <div>
        <button className="enrol-btn">SUBMIT</button>
        </div>
      </div>
    </div>
   </Layout>
  );
};

export default Enroll;
