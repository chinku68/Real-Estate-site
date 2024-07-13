import React,  { useState }from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Acres.css'
import AddIcon from '@mui/icons-material/Add';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';


const NavigatationBar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const navigate = useNavigate();

  const handleListProperty =(e)=>{
    navigate('/ListProperty');
  };

  return (
    <div> 
      <div className='navbar'>
        <div  className='d-flex buyin'>
        <img src='https://openplot.com/logo.png'alt='logo'/>
        <div className='d-flex flex-row list-loc' onClick={handleListProperty}>
          
         <h6 className='listyour'>Buy In Warangal</h6>
         <KeyboardArrowDownIcon/>
     </div>
        </div>
        <div className="search-container">
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>Deal</button>
        {dropdownVisible && (
          <div className="dropdown-content">
            <a href="#buy">Buy</a>
            <a href="#rent">Rent</a>
           
          </div>
        )}
      </div>
      <SearchOutlinedIcon style={{ margin: '5px 10px' }} /> 
      <input type="text" className="search-inpuut" placeholder="Search by Location" />
      <MyLocationIcon style={{ color: '#0078db', margin: '5px 20px' }} />
      <KeyboardVoiceIcon
              style={{ color: '#0078db', margin: '5px 20px' }}/>
    </div>
    <div className='profile-container'>
      <div className='d-flex flex-row prof'>
        <AccountCircleIcon />
        <h6 className='prof-name'>Chinku</h6>
      </div>
      <div className='dropdown-menu'>
        <a href="#">My Profile</a>
        <a href="#">My Properties</a>
        <a href="#">Dashboard</a>
        
        <a href="#">Add Manager</a>
        
        
        <a href="#">Notifications</a>
        <a href="#">Logout</a>
      </div>
    </div>
     <div className='d-flex flex-row list-pr' onClick={handleListProperty}>
    <AddIcon/>
    <h6 className='listyour'>ListYour Property</h6>
     </div>
        
        
      </div>
      <div className='row-container'>
        <div className='row-imgs'>
        <img  className='row-img' src='https://www.99acres.com/universalapp/img/projectnoimage.png'  alt='ccc'/>
        <p className='bot-name'>Projects</p>
        </div>
        <div className='row-imgs'>
        <img  className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_2.webp'  alt='ccc'/>
        <p className='bot-name'>Independent House</p>
        </div>
        <div className='row-imgs'>
        <img  className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_plot_land_WITHIN_BOUNDARY_WALL.webp'  alt='ccc'/>
        <p className='bot-name'>Venture</p>
        </div>
        <div className='row-imgs'>
        <img  className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_5.webp'  alt='ccc'/>
        <p className='bot-name'>Farm House</p>
        </div>
        <div className='row-imgs'>
        <img  className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_1.webp'  alt='ccc'/>
        <p className='bot-name'>Office  </p>
        </div>
        <div className='row-imgs'>
        <img  className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_4.webp'  alt='ccc'/>
        <p className='bot-name'>PG/Hostel</p>
        </div>
        <div className='row-imgs'>
        <img  className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_22.webp'  alt='ccc'/>
        <p className='bot-name'>Project</p>
        </div>
        <div className='row-imgs'>
        <img  className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_3.webp'  alt='ccc'/>
        <p className='bot-name'>Land</p>
        </div>
      </div>
      <div>
      
      
      </div>


    </div>
  )
}
export default NavigatationBar;




export function ListProperty (){

  return(
    <div>
    hii
    </div>
  )


}