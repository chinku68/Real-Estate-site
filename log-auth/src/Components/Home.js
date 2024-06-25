import React from 'react'
import './Home.css'

import NavigatationBar from './BootComponents/NavigatationBar'


const Home = () => {
  return (
    <div className='hoe-bg'>
     <NavigatationBar/>
      <h1 className='main-heading'>SucessFully LoggedIn</h1>
    </div>
  )
}

export default Home