
import React from 'react';
import {FaStar} from 'react-icons/fa';



const StarRating = ({ratings}: {ratings: number}) => {
  
  return (
    <div className='flex'>
        {[...Array(5)].map((_, id) => {
            return(
                <FaStar 
                  key={id} 
                  color={ id + 1 <= ratings ? 'yellow' : ""}
                />
            )
        })}
    </div>
  )
}

export default StarRating