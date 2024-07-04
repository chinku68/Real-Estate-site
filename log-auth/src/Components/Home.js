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
     {/* <NavigatationBar/> */}
      <Acres/>
      <SearchBar/>
      <Test/>
      <Multicard/>
      

    </div>
  )
}

export default Home