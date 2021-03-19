import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import big2 from '../../assets/css/Image/big2.jpg';
import './Rightbar.css';

const RightSidebar = () => {

  const [ date, setDate]= useState(new Date());

  const onChange = date =>{
    setDate(date);
  };
  return (
    <>
     <div class="style_h1">
     <div class="heading_h1">
      <h1> We <span>Craft</span> Your <span>Imaginations</span></h1>
    </div>
     <img src={big2}></img>
    </div>

    <div class="calander">
      <Calendar showWeekNumbers onChange ={onChange} value={date}/>
      {date.toString()}
    
    </div>
   

    </>
  );
};

export default RightSidebar;
