import React from 'react';
import { useParams } from 'react-router-dom';
import listprop from './ListProperty.json';
import './DisplayProp.css';
import Carousel from 'react-bootstrap/Carousel';


const DisplayProp = () => {
  const { id } = useParams();
  
 
  const [category,projectname, price] = id.split('-');
  const property = listprop.find(
    item => item.category === category&&item.projectname.replace(' ','')===projectname && item.price === parseInt(price)
  );

  return (
    <div>
      {property ? (
        <div className='param-container'>
          <div className='d-flex flex-row col-12'>
            <div className='param-img col-5'>
            <Carousel prevIcon={<span className="carousel-control-prev-icon" />} nextIcon={<span className="carousel-control-next-icon" />}>
                {property.img.map((imageUrl, index) => (
                  <Carousel.Item key={index}>
                    <img  className='param-img' src={imageUrl} alt={`Property Image ${index + 1}`} />
                    <div className="carousel-overlay">
                    <span className="image-count">{`${index + 1} / ${property.img.length}`}</span>
                  </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              
            </div>
            <div>
              <h2>{property.projectname.toUpperCase()}</h2>
              <p>Price: {property.price} $</p>
              <p>Property Type: {property.propertytype}</p>
              <p>Category: {property.category}</p>
              <p>No. of Bedrooms: {property.noofbedrooms}</p>
              <p>Facing: {property.facing}</p>
              <p>Construction Status: {property.constructionstatus}</p>
              <p>Purchase Type: {property.purchasetype}</p>
              <p>Posted By: {property.postedby}</p>
              <p>Date: {property.date}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className='not-found-card'>
        <h2>Property not found</h2>
        <p>We couldn't find the property you're looking for. Please check the details and try again.</p>
      </div>
      )}
    </div>
  );
};

export default DisplayProp;










