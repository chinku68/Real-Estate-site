import React from 'react';
import { useParams } from 'react-router-dom';
import listprop from './ListProperty.json';
import './DisplayProp.css';

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
            <img
              className='param-img col-5'
              src={property.img}
              alt={property.projectname}
            />
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
