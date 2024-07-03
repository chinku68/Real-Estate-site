import React from 'react'
import './Home.css'

import NavigatationBar from './BootComponents/NavigatationBar'
import Acres from './BootComponents/Acres'
import SearchBar from './SearchBar'


const Home = () => {
  return (
    <div >
     {/* <NavigatationBar/> */}
      <Acres/>
      <SearchBar/>
    </div>
  )
}

export default Home