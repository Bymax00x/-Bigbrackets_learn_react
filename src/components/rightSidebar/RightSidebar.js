import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Rightbar.css';

const RightSidebar = () => {

  const [ date, setDate]= useState(new Date());

  const onChange = date =>{
    setDate(date);
  };
  return (
    <>
    <div class="date_entry">
      <Calendar showWeekNumbers onChange ={onChange} value={date}/>
      {date.toString()}
    
    </div>
    <div class="style_h1"> 
    <div class="style_h2">
      <h1> We <span>Craft </span>Your <span>Imagination</span></h1>
    </div>
      <img src="big1.png"></img>
  
  
    </div>
    </>
  );
};


export default RightSidebar;
