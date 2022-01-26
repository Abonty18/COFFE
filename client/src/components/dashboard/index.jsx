import React, { useState, useRef } from 'react';
import Sidebar from '../common/Sidebar';
import Card from '../common/Card';
import samples from './samples';
import { Typography, TextField, Button } from '@material-ui/core/';
import "./style.css";



const Dashboard = () => {
  return(
  <div className='dash'>
    <Sidebar />
    <div className="dash1">
      <div className="dash2">
        {samples.map((sample) => (<Card sample={sample} />))}
      </div>
    </div>
  </div>
  );
  };

export default Dashboard;
