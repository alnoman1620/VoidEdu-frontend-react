import React from "react";
import "./Courses.css";
import services from "../../service.json";
import { NavLink } from "react-router-dom";
import Layout from "../Layout/Layout";

const Courses = () => {
  return (
    <Layout>
      <div className="courses">
      <div>
        {services.courses.map((course) => {
          return (
            <div className="course-div">
                <div >
                    <img className="course-img" src={course.courseImage} alt=""></img>
                </div>
                <div className="course-detail">
                    <h1>{course.name}</h1>
                    <p>Teacher Name: {course.teacher}</p>
                    <small>{course.description}</small>
                    <p>Time Duration: {course.duration}</p>
                    <p>Total Classes: {course.totalClass}</p>
                    <h3>Enrollment Cost: {course.price} $</h3>
                    <NavLink to='/enroll'><button className="enroll-btn">Enroll Now</button></NavLink>
                    <hr></hr>
                </div>
            </div>

          )
           
          
        })}
      </div>
    </div>
    </Layout>
  );
};

export default Courses;
