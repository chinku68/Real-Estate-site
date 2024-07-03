import React from 'react';
import './SearchBar.css';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
  return (
    <div >
        <div className='card-search'>
         <div className='top-sec '>
           <h6 className='row-items'>Buy</h6>
           <h6 className='row-items'>Rent</h6>
           <h6 className='row-items'>New Launch</h6>
           <h6 className='row-items'>PG/Co-living</h6>
           <h6 className='row-items'>Commercial</h6>
           <h6 className='row-items'>Plots/Lands</h6>
            <h6 className='row-items'>Projects</h6>
         </div>
         <div className='bot-sec'>
            <select className='dd-area'>
                <option>Project</option>
                <option>Form House</option>
                <option>Villa</option>
                <option>Plot</option>
            </select>
            <div className='bot-bar'>
                <SearchOutlinedIcon style={{margin:"5px  10px"}}/>
            <input type='text' placeholder='Search by Location' className='search-input'/>
            <MyLocationIcon style={{color:"#0078db",margin:"5px  20px"}}/>
            <KeyboardVoiceIcon style={{color:"#0078db",margin:"5px  20px"}}/>
            <button className='se-button'>search</button>
            </div>
         </div>
        </div>
    </div>
  )
}

export default SearchBar