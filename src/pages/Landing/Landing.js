import React from 'react'
import { useHistory } from 'react-router';
import "./Landing.css";

const Landing = () => {
    let history = useHistory();
    return (
        <>
        <div className="nav_bar">
            <div className="heading">
            {/* <img src="2.jpg" ></img> */}
            <h1> <a href="#">About Us</a></h1>
            <h1> <a href="#">Contact</a></h1>
            <h1> <a href="#">Career</a></h1>
            <h1> <a href="#">Blog</a></h1>
            <button onClick={()=>history.push("/Home")}> Get Started</button>
            </div>
        </div>
        <div class="First">
            <h1> We help to craft your</h1>
        </div>
        <div class="Second">
            <h1> Imagination....</h1>
        </div>
       
            <div class="padding">
                <div class="image">
                <img src="2.jpg" alt></img>
        </div>
            <div class="paadhead">
            

                <h1>
                   Impressum
                </h1>
                
                <p>
                    Modern Problems need morden solutions to expand bussiness
                    and excel bussiness too. Thats where we come in.
                    Combining our methods and expertise of digital marketing
                    to your bussines, lets place your bussiness on the map.
                    And how can we achieve that, you say? Well, thats where techonology fits in.

                </p>
               
            
            </div>
            <div class="img_gg">
                <div class="img_1">
                    <img src="2.jpg"></img>

                    <img src="2.jpg"></img>
                </div>
            </div>
           
       
          
        </div>
        
       
        </>
    )
}

export default Landing;
