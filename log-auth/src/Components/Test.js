import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Test.css';
import data from './Project.json';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const Test = () => {
    const settings = {
        dots: false,
        infinite:true,
        speed: 550,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <>
     <h6 className='main-head'>Newly Added <span style={{color:"red"}}>Project</span>  Properties For Sale</h6>
     <p className='para-main'>Regularly update the project listings as new information becomes available, and ensure that the content is accurate and up-to-date.</p>
    <div  className='caro-card'>
        
        <div className="slider-container mt-5 ">
      <Slider {...settings}>
        
          {data.card.map((item,index) =>( 
          <div className='m-card' key={index}>
              <img className='c-img' src={item.projectimg} alt={item.ProjTitle}/>   
              <h4 className='c-head'>{item.ProjTitle.toUpperCase()}</h4>
              <div className='slots'>
                <div className='slot'>
                  <KingBedOutlinedIcon style={{fontSize:"x-large",paddingLeft:"6px" ,paddingTop:"3px"}}/>
                  <p className='slot-p'>{item.Slots} Slots</p>
                </div>
                
                <div className='slot'>
                  <ApartmentIcon style={{fontSize:"x-large",paddingLeft:"6px" ,paddingTop:"3px"}}/>
                  <p className='slot-p'>{item.floors} Floors</p>
                </div>
                <div className='slot'>
                  <BorderClearIcon style={{fontSize:"x-large",paddingLeft:"6px" ,paddingTop:"3px"}}/>
                  <p className='slot-p'>{item.areainacrs} acres</p>
                </div>  
              </div>
              <div className='card-loc'>
                <LocationOnOutlinedIcon style={{color:"red",paddingLeft:"5px"}}/>
                <p className='loc-para'>{item.loc}</p>
                <p className='loc-para-cost'>$    {item.price}</p>
              </div>
            </div>
           ))}
    
      </Slider>
    </div>
    
    </div>
    </>
  )
}

export default Test;