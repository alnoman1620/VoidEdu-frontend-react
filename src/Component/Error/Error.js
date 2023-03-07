import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <hr></hr>
          <div className='error-text'>
          <h1 className='four-o-four'>404</h1>
          <h2>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</h2>
          <Link to='/home'><button className='error-btn'>GO HOME</button></Link>
          </div>
        </div>
    );

    }

export default Error;