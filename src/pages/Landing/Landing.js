import React from 'react'
import { useHistory } from 'react-router';
import "./Landing.css";

const Landing = () => {
    let history = useHistory();
    return (
        <>
        <div className="nav_bar">
            <div className="heading">
            <img src="2.jpg" ></img>
            <h1> <a href="#">About Us</a></h1>
            <h1> <a href="#">Contact</a></h1>
            <h1> <a href="#">Career</a></h1>
            <h1> <a href="#">Blog</a></h1>
            <button onClick={()=>history.push("/Home")}> Get Started</button>
            </div>
        </div>
       
        </>
    )
}

export default Landing;
