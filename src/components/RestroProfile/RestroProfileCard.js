import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import './RestroProfileCard.css';

export default function RestroProfileCard(props) {
  return (
          <div className='col-l-3 col-md-3 col-sm-4 col-6 restro-card '>
         <div className=''>
           <div className='img-container'>
           <img className='' src={props.img}/>
           </div>
           <div className='restro-text'>
             <div className='text'>
             <h6 className='text-poppin'>{props.title}</h6>
             <p className='text-poppin'>{props.desc}</p>
           </div>
             <div className='restro-rating'>
               <div>5<AiFillStar/></div>
             </div>
           </div>
         </div> 
    </div>
  )
}
