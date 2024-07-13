import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Acres.css';
import data from '../Project.json';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Acres = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        {data.acres.map((item,index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 sec-img image-h"
              src={item.image}
              alt="img"
            />
            <Carousel.Caption>
              <div>
              <div className='card-p'>
                <h5 className='title'>{item.title}</h5>
                <h4><span className='bhkk'>{item["BHK type"]}</span> <span className='lux'>LUXURY</span>   <span className='prop-type'>{item.Propertytype.toUpperCase()}</span></h4>
                <p className='para-address'> <span className='keey'>Area Range: </span><span className='valu'>{item["Area range"]} </span><span style={{color:"black"}}>| |</span><span  className='keey'>    Address:</span><span  className='valu'> {item.Address}</span></p>
                <button className='button-e'>Explore Now <ArrowForwardIcon style={{fontSize:"medium"}}/></button>
              </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Acres;




