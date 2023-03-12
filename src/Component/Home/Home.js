import React, { createContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import services from "../../service.json";
import student from "../../image/section3.jpg";
import Layout from "../Layout/Layout";


//set context api
export const CourseContext = createContext()

const Home = () => {
  const [course, setCourse] = useState([])



  useEffect(()=>{
      fetch('../../course.json')
      .then(res => res.json())
      .then(data => setCourse(data))
  },[])
  return (
    
    <CourseContext.Provider value={course}>
        <Layout>
      <div className="home">
      <div className="section1">
        <h1>Learn With</h1>
        <h1>Modern Texhnology</h1>

        <a href="#section2" className="section1-button">
          Read More
        </a>
      </div>
      <div id="section2">
        <div className="home-card one">
          <h1>Our courses</h1>
          <div className="p-div">
            {services.courses.map((course, key) => {
              return <p key={key}>{course.name}</p>;
            })}
          </div>
          <Link to="/courses">
            <button className="sec-2-btn">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="home-card two">
          <h1>Our Teachers</h1>
          <div className="p-div">
            {services.courses.map((course, key) => {
              return <p key={key}>{course.teacher}</p>;
            })}
          </div>
          <Link>
            <button className="sec-2-btn">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="home-card three">
          <h1>Enrollment PROCCESS</h1>
          <div className="p-div">
            <p>
              We are happy to tell you that we are accepting new <br></br>{" "}
              addmissions for new batch so dont delay get …
            </p>
            <p>Find a course best suits your skills</p>
            <p> Attent the seminar related to that course</p>
            <p> Helping Board in your learning management</p>
          </div>
          <Link to='/enroll'>
            <button className="sec-2-btn">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      <div className="section3">
        <div className="sec3-img-div">
          <img className="sec3-img" src={student} alt=""></img>
        </div>
        <div className="sec3-text">
          <h1>
            WELCOME TO <span className="sec3-span">VOID EDU</span>
          </h1>
          <h3 className="sec3-h3">
            We Are Eager To Give You Best Education And Style.
          </h3>
          <p className="sec3-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat
            mauris quis volutpat fermentum. Nunc nec nisi vitae ipsum pharetra
            tincidunt. Nam vel purus dolor. Aliquam erat volutpat. Donec laoreet
            iaculis elementum. Aliquam ligula nisi, molestie faucibus tortor
            quis, vulputate imperdiet turpis. In iaculis arcu et aliquam
            dapibus. Nulla facilisi. Nunc pellentesque euismod felis id posuere.
            Nunc maximus aliquet varius. Cras ornare tristique est vel
            porttitor. Fusce tempor, augue sagittis congue ornare, tortor augue
            elementum augue, quis egestas nisi ipsum eget urna. Suspendisse
            vitae lectus quis turpis dapibus euismod eget a metus. Nulla eget
            nunc purus. Ut egestas et nulla at pretium. Pellentesque sed varius
            lectus.
          </p>
          <NavLink to="/teacher"><button className="sec3-btn">MEET OUR TEACHERS</button></NavLink>
        </div>
      </div>
      <div className="extra-section">
        <h1>ITS EASY, ITS BRILLIANT, IT WORKS!</h1>
        <div className="extra-text">
          <h3>⚪Select A Course You Like And Explore It!</h3>
          <p>
            Once upon a time there was a thirsty crow he flew here and there in
            search of water.
          </p>
        </div>
        <div className="extra-text">
          <h3>⚪Select A Course You Like And Explore It!</h3>
          <p>
            But he could not find water anywhere at last he reached in a garden
            where he saw a pitcher.
          </p>
        </div>
        <div className="extra-text">
          <h3>⚪Get Enrolled And Start Better Future With Us!</h3>
          <p>
            Thirsty Crow should Call us at: 123-123-1234 to drink water asap
            before all seats are reserved.
          </p>
        </div>
      </div>
      <div className="section4">
        <div className="sec3-text">
          <h1>OUR TEACHERS</h1>
          <p>Some Special Teachers From The Industry!</p>
        </div>
        <div className="teacher-card">
          {course.map((cou) => {
            return (
              <div>
                <img className="teacher-img" src={cou.image} alt=""></img>
                <h4>{cou.teacher}</h4>
                <small>{cou.university}</small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </Layout>
    </CourseContext.Provider>
   
  );
};

export default Home;
