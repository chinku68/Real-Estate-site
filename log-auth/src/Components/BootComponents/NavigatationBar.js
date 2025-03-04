import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import 'bootstrap/dist/css/bootstrap.min.css';
import SellIcon from '@mui/icons-material/Sell';
import './Acres.css'
import AddIcon from '@mui/icons-material/Add';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const NavigatationBar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const navigate = useNavigate();

  const handleListProperty = (e) => {
    navigate('/ListProperty');
  };

  return (
    <div>
      <div className='navbar'>
        <div className='d-flex buyin'>
          <img src='https://openplot.com/logo.png' alt='logo' />
          <div className='d-flex flex-row list-loc'>

            <h6 className='listyour'>Buy In Warangal</h6>
            <KeyboardArrowDownIcon />
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
            style={{ color: '#0078db', margin: '5px 20px' }} />
        </div>
        <div className='profile-container'>
          <div className='d-flex flex-row prof'>
            <AccountCircleIcon />
            <h6 className='prof-name'>Chinku</h6>
          </div>
          <div className='dropdown-menu'>
            <a href="#">Myy Profile</a>
            <a href="#">My Properties</a>
            <a href="#">Dashboard</a>

            <a href="#">Add Manager</a>


            <a href="#">Notifications</a>
            <a href="#">Logout</a>
          </div>
        </div>
        <div className='d-flex flex-row list-pr' onClick={handleListProperty}>
          <AddIcon />
          <h6 className='listyour'>ListYour Property</h6>
        </div>


      </div>
      <div className='row-container'>
        <div className='row-imgs'>
          <img className='row-img' src='https://www.99acres.com/universalapp/img/projectnoimage.png' alt='ccc' />
          <p className='bot-name'>Projects</p>
        </div>
        <div className='row-imgs'>
          <img className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_2.webp' alt='ccc' />
          <p className='bot-name'>Independent House</p>
        </div>
        <div className='row-imgs'>
          <img className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_plot_land_WITHIN_BOUNDARY_WALL.webp' alt='ccc' />
          <p className='bot-name'>Venture</p>
        </div>
        <div className='row-imgs'>
          <img className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_5.webp' alt='ccc' />
          <p className='bot-name'>Farm House</p>
        </div>
        <div className='row-imgs'>
          <img className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_1.webp' alt='ccc' />
          <p className='bot-name'>Office  </p>
        </div>
        <div className='row-imgs'>
          <img className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_4.webp' alt='ccc' />
          <p className='bot-name'>PG/Hostel</p>
        </div>
        <div className='row-imgs'>
          <img className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_22.webp' alt='ccc' />
          <p className='bot-name'>Project</p>
        </div>
        <div className='row-imgs'>
          <img className='row-img' src='https://static.99acres.com/universalhp/img/d_hp_property_type_3.webp' alt='ccc' />
          <p className='bot-name'>Land</p>
        </div>
      </div>
      <div>


      </div>


    </div>
  )
}
export default NavigatationBar;



export function ListProperty() {

  const [selectedSaleRent, setSelectedSaleRent] = useState('');
  const [selectedResCom, setSelectedResCom] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bhkType, setBhkType] = useState('');
  const [facing, setFacing] = useState("");
  const [purType, setPurType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [projectName, SetProjectName] = useState("");
  const [textValue, setTextValue] = useState('');
  const [fileValue, setFileValue] = useState(null);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

  const handleDateChange = (date) => {
    const formattedDate = date ? formatDate(date) : formatDate(new Date());
    setSelectedDate(formattedDate);

  };
  const handleClearLocalStorage = () => {
    localStorage.clear('propertyList');
    setPropertyList([]);
    alert("local storage Cleared");
  };
  const [propertyList, setPropertyList] = useState(() => {

    const savedPropertyList = localStorage.getItem('propertyList');
    return savedPropertyList ? JSON.parse(savedPropertyList) : [];
  });


  useEffect(() => {

    localStorage.setItem('propertyList', JSON.stringify(propertyList));
  }, [propertyList]);



  const handleTextChange = (event) => {
    setTextValue(event.target.value);
    console.log('Text Input Value:', event.target.value);
  };

  const handleFileChange = (event) => {
    setFileValue(event.target.files[0]);
    console.log('Selected File:', event.target.files[0]);
  };
  const handleSaleRentClick = (option) => {
    setSelectedSaleRent(option);
  };

  const handleResComClick = (option) => {
    setSelectedResCom(option);
  };
  const handelPropertySelect = (opt) => {
    setPropertyType(opt);
  }
  const handelBhkSelect = (option) => {
    setBhkType(option)
  }
  const handelFacingClick = (opt) => {
    setFacing(opt);
  }
  const handelPurchasetypeClick = (opt) => {
    setPurType(opt);
  }
  const handleStatusClick = (opt) => {
    setSelectedStatus(opt);
  }
  const handleProjectName = (e) => {
    SetProjectName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();


    const newProperty = {
      postedby: selectedSaleRent,
      category: selectedResCom,
      propertytype: propertyType,
      noofbedrooms: bhkType,
      facing: facing,
      purchasetype: purType,
      constructionstatus: selectedStatus,
      price: textValue,
      img: ["https://static.99acres.com/universalhp/img/d_hp_com_buy.webp",
        "https://static.99acres.com/universalhp/img/d_hp_property_type_10.webp",
        "https://static.99acres.com/universalhp/img/d_hp_property_type_7.webp"],
      projectname: projectName,
      date: selectedDate

    };
    console.log(new Date())
    setPropertyList([...propertyList, newProperty]);
    alert("Listed sucess fully")
    //  JSON.stringify(propertyList);

  }
  const propertyTypesBtn = [
    'Independent House', 'Apartment', 'Independent Floor',
    'Plot', '1RK', 'VillaFarm', 'Farm House', 'Office',
    'Store/Retail', 'Storage', 'Industry', 'Venture',
    'Project', 'Land', 'Other'
  ];
  const statusType = ['Under Construction', 'Ready To Move'];

  const facingType = ['east', 'west', 'north', 'south', 'southeast', 'southwest', 'northeast', 'northwest'];
  const bhkTypeBtn = [
    '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK',
    '6 BHK', '7 BHK', '8 BHK', '9 BHK', '10 BHK'
  ];
  const categoryType = ['residential', 'commercial'];

  console.log(propertyList);
  return (

    <>

      <form onSubmit={handleSubmit}>
        <div className="col-12 card_s">
          <div className="b-bg">
            <label className="q_head">
              I Want to <span className="star">*</span>
            </label>
            <div className="btn_s">
              <button
                type="button"
                className={`y_btn ${selectedSaleRent === 'Builder' ? 'selected' : ''}`}
                onClick={() => handleSaleRentClick('Builder')}
              ><SellIcon style={{ fontSize: "small" }} />
                Sale
              </button>
              <button
                type="button"
                className={`y_btn ${selectedSaleRent === 'Owner' ? 'selected' : ''}`}
                onClick={() => handleSaleRentClick('Owner')}
              >
                Rent/Lease
              </button>
            </div>
          </div>
          <div className="b-bg">
            <label className="q_head">
              Is it Residential or Commercial? <span className="star">*</span>
            </label>
            <div className="btn_s">
              <button
                type="button"
                className={`y_btn ${selectedResCom === 'residential' ? 'selected' : ''}`}
                onClick={() => handleResComClick('residential')}
              >
                Residential
              </button>
              <button
                type="button"
                className={`y_btn ${selectedResCom === 'commercial' ? 'selected' : ''}`}
                onClick={() => handleResComClick('commercial')}
              >
                Commercial
              </button>
            </div>
          </div>
        </div>
        <div className="b-bgl">
          <label className="q_head">
            Property Type <span className="star">*</span>
          </label>
          <div className="btn_s">
            {propertyTypesBtn.map((type, index) => (
              <button
                key={index}
                type="button"
                className={`y_btn ${propertyType === type ? 'selected' : ''}`}
                onClick={() => handelPropertySelect(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="b-bgl">
          <label className="q_head">
            No Of Bed  Rooms<span className="star">*</span>
          </label>
          <div className="btn_s">
            {bhkTypeBtn.map((type, index) => (
              <button
                key={index}
                type="button"
                className={`y_btn ${bhkType === type ? 'selected' : ''}`}
                onClick={() => handelBhkSelect(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="b-bgl">
          <label className="q_head">
            Facing <span className="star">*</span>
          </label>
          <div className="btn_s">
            {facingType.map((type, index) => (
              <button
                key={index}
                type="button"
                className={`y_btn ${facing === type ? 'selected' : ''}`}
                onClick={() => handelFacingClick(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="col-12 card_s">
          <div className="b-bg">
            <label className="q_head">
              Purchase Type <span className="star">*</span>
            </label>
            <div className="btn_s">
              <button
                type="button"
                className={`y_btn ${purType === 'New' ? 'selected' : ''}`}
                onClick={() => handelPurchasetypeClick('New')}
              ><SellIcon style={{ fontSize: "small" }} />
                New
              </button>
              <button
                type="button"
                className={`y_btn ${purType === 'Resale' ? 'selected' : ''}`}
                onClick={() => handelPurchasetypeClick('Resale')}
              >
                Resale
              </button>
            </div>
          </div>
          <div className="b-bg">
            <label className="q_head">
              Status Type <span className="star">*</span>
            </label>
            <div className="btn_s">
              <button
                type="button"
                className={`y_btn ${selectedStatus === 'Ready To Move' ? 'selected' : ''}`}
                onClick={() => handleStatusClick('Ready To Move')}
              ><SellIcon style={{ fontSize: "small" }} />
                Ready To Move
              </button>
              <button
                type="button"
                className={`y_btn ${selectedStatus === 'Under Construction' ? 'selected' : ''}`}
                onClick={() => handleStatusClick('Under Construction')}
              >
                Under Construction
              </button>
            </div>
          </div>
        </div>
        <div className='in_p'>
          <label>Price</label>
          <input
            type='number'
            value={textValue}
            onChange={handleTextChange}
            placeholder='Enter text here'
          />
          <label>Images</label>
          <input
            type='file'
            onChange={handleFileChange}
          />
          <label>Project Name</label>
          <input type="text" onChange={handleProjectName}
          />
        </div>
        {/* <div>
    <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        className='in_pd'
      />
      {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
    
      </div>   */}
        <div className='btns_s'>
          <button type="submit" className="submit-button">
            Submit
          </button>



        </div>
      </form>
      <button onClick={handleClearLocalStorage} className="clear-button">Clear Local storage</button>
    </>

  );
}


