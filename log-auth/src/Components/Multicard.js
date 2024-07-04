import React from 'react';
import './Multicard.css';
import { useNavigate } from 'react-router-dom';

import data from './Project.json';

const Multicard = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.card.length - 4 : prevIndex - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === data.card.length - 4 ? 0 : prevIndex + 1));
  // };
const changeToFilter =(e)=>{
  navigate('/Filter');
};
  return (
    <>
    {/* <h6 className='main-head'>Newly Added <span style={{color:"red"}}>Project</span>  Properties For Sale</h6>
    <p className='para-main'>Regularly update the project listings as new information becomes available, and ensure that the content is accurate and up-to-date.</p> */}
    {/* <div className='carousl'>
      <button className='carousel-button left' onClick={handlePrev}>‹</button>
      <div className='m-cards'>
        {data.card.slice(currentIndex, currentIndex + 4).map((item, index) => (
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
              <p className='loc-para-cost'>$     {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='carousel-button right' onClick={handleNext}>›</button>
    </div> */}
    <div>
      <div className='bg-cities'>
        <div >
          <h6 className='main-city-head'>Explore Properties in Popular <span style={{color:"red",fontFamily:"revert-layer"}}>Telangana Cities</span></h6>
          <p className='para-main'>Explore properties across popular cities in the state, from residential to commercial and more.</p>
        </div>
        <div>
          <div className='d-flex flex-row row-cards'>
          {data.cities.map((items,index) =>(
          <div key={index} className=' city-card'  onClick={changeToFilter}>
            <img className='ct-imgs' src={items.ctimage} alt='gfh'/>
             <div>
             <h5 className='ct-name'>{items.city}</h5>
             <p className='plot-no'>{items.Properties}  Properties</p>
             </div>
          </div>
          
        ))}
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Multicard;

