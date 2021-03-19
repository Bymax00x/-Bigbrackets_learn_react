
import React from 'react'
import './rating.css';
import { FaStar} from 'react-icons/fa';

const Rating = () => {
    return (
        <>
        <div className="rating" >
        {[...Array(5)].map(star => {
            return <FaStar size={100} />
        })}
        
            
        </div>
        </>
    )
}

export default Rating
