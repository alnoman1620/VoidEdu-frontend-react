import React from "react";
import "./Teacher.css";
import services from "../../service.json";
import {
  
  Card,
  
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Teacher = () => {
  return (
    <div className="teacher">
      <div className="intro">
        <h1>Our Teachers</h1>
      </div>
      <div className="teacher-div">
        {services.courses.map((course) => {
          return (
            <div className="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 240 }}
                  image={course.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   {course.teacher}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teacher;
