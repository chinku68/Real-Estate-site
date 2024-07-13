import React from 'react'
import './Home.css'

import NavigatationBar from './BootComponents/NavigatationBar'
import Acres from './BootComponents/Acres'
import SearchBar from './SearchBar'
import Multicard from './Multicard'
import Test from './Test'


const Home = () => {
  return (
    <div >
     <NavigatationBar/>
      <Acres/>
      <SearchBar/>
      <Test/>
      <Multicard/>
      <div className="card">
      <div className="card-header">
        <span className="badge">NEW LAUNCH</span>
        <img src="https://via.placeholder.com/300x200" alt="Property" className="property-image" />
      </div>
      <div className="card-body">
        <h3 className="property-title">Lansum Elena</h3>
        <p className="property-location">Kokapet, Hyderabad</p>
        <p className="property-price">₹ 2.7 - 3.96 Cr</p>
        <p className="property-details">3, 4 BHK Apartments</p>
        <p className="price-increase">14.5% price increase in last 1 year in ...</p>
        <div className="card-footer">
          <span className="options">Get preferred options @zero brokerage</span>
          <button className="view-number">View Number</button>
        </div>
      </div>
    </div>
      

    </div>
  )
}

export default Home;