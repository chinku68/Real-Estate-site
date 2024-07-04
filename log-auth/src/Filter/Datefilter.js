import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import listprop from './ListProperty.json';
import './Datefilter.css';
import { navigate } from 'react-router-dom'; 
import Collapsible from 'react-collapsible';
import ExploreIcon from '@mui/icons-material/Explore';
import ConstructionIcon from '@mui/icons-material/Construction';
import SyncDisabledIcon from '@mui/icons-material/SyncDisabled';
import KingBedRoundedIcon from '@mui/icons-material/KingBedRounded';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import dataaa from '../Components/Project.json'

const Datefilter = () => {
  const [sortBy, setSortBy] = useState('Newest');
  const [data, setData] = useState(listprop);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBhk, setSelectedBhk] = useState([]);
  const [selectedFacing, setSelectFacing] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedPtype, setSelectedPtype] = useState([]);
  const navigate = useNavigate();

  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const projectsIn = [
    {
      name: "Elisia",
      location: "Hyderabad",
      priceRange: "₹ 63.29 L - 1.12 Cr",
      image: "https://openplot.com/static/media/medak.d63705b0654fc724a62f.jpg"
    },
    {
      name: "Infocity ",
      location: "Hyderabad",
      priceRange: "₹ 5- 1Cr",
      image: "https://openplot.com/static/media/nalgonda.f825de386d3466f08189.jpg"
    },
    {
      name: "SKY",
      location: "Hyderabad",
      priceRange: "₹ 1 - 2.01 Cr",
      image:"https://openplot.com/static/media/Nizamabad.ccc7e334e338ddec8b6a.jpg"
    },
    {
      name: "Green Vally",
      location: " Hyderabad",
      priceRange: "₹ 67 L - 1 Cr",
      image: "https://openplot.com/static/media/yadagiri.92e53a11ba7c59ee9068.jpg"
    },
    {
      name: "EutHub",
      location: "Hyderabad",
      priceRange: "₹ 8lkks - 1 Cr",
      image: "https://openplot.com/static/media/warangal.bb38f7e3cd6961523394.jpg"
    },
    {
      name: "Marvin",
      location: " Hyderabad",
      priceRange: "₹ 1 - 2 Cr",
      image:"https://openplot.com/static/media/Nizamabad.ccc7e334e338ddec8b6a.jpg"
    }
  ];

  const statusType = ['Under Construction', 'Ready To Move'];
  const purType = ['New', 'Resale'];
  const facingType = ['east', 'west', 'north', 'south'];
  const bhkType = [
    '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK',
    '6 BHK', '7 BHK', '8 BHK', '9 BHK', '10 BHK'
  ];
  const categoryType = ['residential', 'commercial'];
  const propertyTypes = [
    'Independent House', 'Apartment', 'Independent Floor',
    'Plot', '1RK', 'VillaFarm', 'Farm House', 'Office',
    'Store/Retail', 'Storage', 'Industry', 'Venture',
    'Project', 'Land', 'Other'
  ];

  useEffect(() => {
    handleSortChange({ target: { value: 'Newest' } });
  }, []);

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);
    const filteredData = filterData(listprop, selectedPropertyTypes, selectedCategories, selectedBhk, selectedFacing, selectedStatus, selectedPtype);
    let sortedData = [...filteredData];
    switch (sortValue) {
      case 'High to Low':
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case 'Low to High':
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case 'Oldest':
        sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'Newest':
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        sortedData = filteredData;
        break;
    }
    setData(sortedData);
  };

  const filterData = (data, types, categories, bhks, facings, status, ptype) => {
    return data.filter(item =>
      (types.length === 0 || types.includes(item.propertytype)) &&
      (categories.length === 0 || categories.includes(item.category)) &&
      (bhks.length === 0 || bhks.includes(item.noofbedrooms)) &&
      (facings.length === 0 || facings.includes(item.facing)) &&
      (status.length === 0 || status.includes(item.constructionstatus)) &&
      (ptype.length === 0 || ptype.includes(item.purchasetype))
    );
  };

  const handleFilterChange = (updatedFilters, setter, filterType) => {
    setter(updatedFilters);
    let filteredData = listprop;
    if (filterType === 'propertyType') {
      filteredData = filterData(filteredData, updatedFilters, selectedCategories, selectedBhk, selectedFacing, selectedStatus, selectedPtype);
    } else if (filterType === 'category') {
      filteredData = filterData(filteredData, selectedPropertyTypes, updatedFilters, selectedBhk, selectedFacing, selectedStatus, selectedPtype);
    } else if (filterType === 'bhk') {
      filteredData = filterData(filteredData, selectedPropertyTypes, selectedCategories, updatedFilters, selectedFacing, selectedStatus, selectedPtype);
    } else if (filterType === 'facing') {
      filteredData = filterData(filteredData, selectedPropertyTypes, selectedCategories, selectedBhk, updatedFilters, selectedStatus, selectedPtype);
    } else if (filterType === 'status') {
      filteredData = filterData(filteredData, selectedPropertyTypes, selectedCategories, selectedBhk, selectedFacing, updatedFilters, selectedPtype);
    } else if (filterType === 'ptype') {
      filteredData = filterData(filteredData, selectedPropertyTypes, selectedCategories, selectedBhk, selectedFacing, selectedStatus, updatedFilters);
    }
    let sortedData = [...filteredData];
    switch (sortBy) {
      case 'High to Low':
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case 'Low to High':
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case 'Oldest':
        sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'Newest':
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        sortedData = filteredData;
        break;
    }
    setData(sortedData);
  };

  const handlePropertyTypeClick = (type) => {
    const updatedSelectedTypes = selectedPropertyTypes.includes(type)
      ? selectedPropertyTypes.filter(t => t !== type)
      : [...selectedPropertyTypes, type];
    handleFilterChange(updatedSelectedTypes, setSelectedPropertyTypes, 'propertyType');
  };

  const handleCategoryClick = (category) => {
    const updatedSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    handleFilterChange(updatedSelectedCategories, setSelectedCategories, 'category');
  };

  const handleBhkClick = (bhkk) => {
    const updatedSelectedBhk = selectedBhk.includes(bhkk)
      ? selectedBhk.filter(b => b !== bhkk)
      : [...selectedBhk, bhkk];
    handleFilterChange(updatedSelectedBhk, setSelectedBhk, 'bhk');
  };

  const handleFacingClick = (face) => {
    const updatedSelectedFacing = selectedFacing.includes(face)
      ? selectedFacing.filter(f => f !== face)
      : [...selectedFacing, face];
    handleFilterChange(updatedSelectedFacing, setSelectFacing, 'facing');
  };

  const handleStatusClick = (cstatus) => {
    const updatedSelectedStatus = selectedStatus.includes(cstatus)
      ? selectedStatus.filter(s => s !== cstatus)
      : [...selectedStatus, cstatus];
    handleFilterChange(updatedSelectedStatus, setSelectedStatus, 'status');
  };

  const handlePTypeClick = (purc) => {
    const updatedSelectedPType = selectedPtype.includes(purc)
      ? selectedPtype.filter(z => z !== purc)
      : [...selectedPtype, purc];
    handleFilterChange(updatedSelectedPType, setSelectedPtype, 'ptype');
  };

  const handleCardClick = (item) => {
    const url = `${item.category}-${item.projectname.replace(' ','')}-${item.price}`;
    window.open(url, '_blank');
  };
  const renderOnlineShoppingCard = () => {
    return (
      <div className='carosel-add'>
      <div className="slider-container">
        <h5 className='add-heading'> Newly Launched Projects</h5>
      <Slider {...settings}>
      {dataaa.card.map((item,index) =>( 
          <div className='m-card' key={index}>
              <img className='c-img' src={item.projectimg} alt={item.ProjTitle}/>   
              <h4 className='c-head'>{item.ProjTitle.toUpperCase()}</h4>
              <div className='slots'>
                <div className='slot'>
                  <KingBedOutlinedIcon style={{fontSize:"x-large",paddingLeft:"6px" ,paddingTop:"3px"}}/>
                  <p className='slot-p'>{item.Slots} Slots</p>
                </div>
                
                <div className='slot'>
                  <ApartmentIcon style={{fontSize:"x-large",paddingLeft:"6px" ,paddingTop:"3px"}}/>
                  <p className='slot-p'>{item.floors} Floors</p>
                </div>
                <div className='slot'>
                  <BorderClearIcon style={{fontSize:"x-large",paddingLeft:"6px" ,paddingTop:"3px"}}/>
                  <p className='slot-p'>{item.areainacrs} acres</p>
                </div>  
              </div>
              <div className='card-loc'>
                <LocationOnOutlinedIcon style={{color:"red",paddingLeft:"5px"}}/>
                <p className='loc-para'>{item.loc}</p>
                <p className='loc-para-cost'>$    {item.price}</p>
              </div>
            </div>
           ))}
      
        
        
      </Slider>
    </div>
        
      </div>  
    );
  };

  const renderCollegeAdCard = () => {
    return (
      <div className="card-container">
      <div className="card">
        <h2>Top Rated Localities</h2>
        <p>based on actual resident reviews</p>
        <div className="locality">
          <img src="https://openplot.com/static/media/warangal.bb38f7e3cd6961523394.jpg" alt="KPHB" />
          <div className="locality-info">
            <h3>KPHB</h3>
            <p>&#8377;8,700 / sq.ft</p>
            <p>600+ reviews</p>
            <a href="#">View Properties</a>
          </div>
          <div className="rating">
            <span>4.5</span>
          </div>
        </div>
        <div className="locality">
          <img src="https://openplot.com/static/media/warangal.bb38f7e3cd6961523394.jpg" alt="Madhapur" />
          <div className="locality-info">
            <h3>Madhapur</h3>
            <p>&#8377;6,950 / sq.ft</p>
            <p>600+ reviews</p>
            <a href="#">View Properties</a>
          </div>
          <div className="rating">
            <span>4.5</span>
          </div>
        </div>
        <div className="locality">
          <img src="https://openplot.com/static/media/warangal.bb38f7e3cd6961523394.jpg" alt="Hi Tech City" />
          <div className="locality-info">
            <h3>Hi Tech City</h3>
            <p>&#8377;12,450 / sq.ft</p>
            <p>250+ reviews</p>
            <a href="#">View Properties</a>
          </div>
          <div className="rating">
            <span>4.5</span>
          </div>
        </div>
        <a href="#" className="view-all">View 721 localities</a>
      </div>
      <div className="card">
        <h2>Localities with Most Sold Properties</h2>
        <p>in last 1 year in Hyderabad</p>
        <div className="locality">
          <img src="https://openplot.com/static/media/warangal.bb38f7e3cd6961523394.jpg" alt="Kokapet" />
          <div className="locality-info">
            <h3>Kokapet</h3>
            <p>&#8377;9,900 / sq.ft</p>
            <p>400+ Registries</p>
            <a href="#">View Properties</a>
          </div>
        </div>
        <div className="locality">
          <img src="https://openplot.com/static/media/warangal.bb38f7e3cd6961523394.jpg" alt="Shaikpet" />
          <div className="locality-info">
            <h3>Shaikpet</h3>
            <p>&#8377;9,450 / sq.ft</p>
            <p>400+ Registries</p>
            <a href="#">View Properties</a>
          </div>
        </div>
        <div className="locality">
          <img src="https://openplot.com/static/media/warangal.bb38f7e3cd6961523394.jpg" alt="Moti Nagar" />
          <div className="locality-info">
            <h3>Moti Nagar</h3>
            <p>&#8377;10,050 / sq.ft</p>
            <p>350+ Registries</p>
            <a href="#">View Properties</a>
          </div>
        </div>
        <a href="#" className="view-all">View 827 localities</a>
      </div>
    </div>
    );
  };

  const renderMobileAdCard = () => {
    return (
      <div className="projects-in-hyderabad">
      <h2>Projects in Hyderabad</h2>
      <p>Inspired by your search preferences</p>
      <div className="property-list">
        {projectsIn.map((project, index) => (
          <div key={index} className="property-card">
            <div className="property-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="property-info">
              <h3>{project.name}</h3>
              <p>{project.location}</p>
              <p>{project.priceRange}</p>
            </div>
            <div className="property-rera">
              <h6>new</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };

  const getAdCard = (index) => {
    switch (index % 4) {
      case 1:
        return renderOnlineShoppingCard();
      case 2:
        return renderCollegeAdCard();
      case 3:
        return renderMobileAdCard();
      default:
        return null;
    }
  };

 
 

  const addCard = () => {
    return (
      <div className='carosel-add'>
      <div className="slider-container">
        <h5 className='add-heading'> Newly Launched Projects</h5>
      <Slider {...settings}>
      {dataaa.card.map((item,index) =>( 
          <div className='m-card' key={index}>
              <img className='c-img' src={item.projectimg} alt={item.ProjTitle}/>   
              <h4 className='c-head'>{item.ProjTitle.toUpperCase()}</h4>
              <div className='slots'>
                <div className='slot'>
                  <KingBedOutlinedIcon style={{fontSize:"x-large",paddingLeft:"6px" ,paddingTop:"3px"}}/>
                  <p className='slot-p'>{item.Slots} Slots</p>
                </div>
                
                <div className='slot'>
                  <ApartmentIcon style={{fontSize:"x-large",paddingLeft:"6px" ,paddingTop:"3px"}}/>
                  <p className='slot-p'>{item.floors} Floors</p>
                </div>
                <div className='slot'>
                  <BorderClearIcon style={{fontSize:"x-large",paddingLeft:"6px" ,paddingTop:"3px"}}/>
                  <p className='slot-p'>{item.areainacrs} acres</p>
                </div>  
              </div>
              <div className='card-loc'>
                <LocationOnOutlinedIcon style={{color:"red",paddingLeft:"5px"}}/>
                <p className='loc-para'>{item.loc}</p>
                <p className='loc-para-cost'>$    {item.price}</p>
              </div>
            </div>
           ))}
      
        
        
      </Slider>
    </div>
        
      </div>
    );
  };

  

  return (
    <>
      <div>
        <div className='d-flex f-row justify-content-end dd-filter'>
          <select value={sortBy} onChange={handleSortChange}>
            <option value='Newest'>Newest</option>
            <option value='High to Low'>High to Low</option>
            <option value='Low to High'>Low to High</option>
            <option value='Oldest'>Oldest</option>
          </select>
        </div>
      </div>
      <div className='col-12 d-flex flex-row'>
        <div className='col-4'>
          <div className='opt-carde p-2'>
            <h6>Apply Filters Here</h6>
            <hr />
            <Collapsible trigger="Property Type">
              <div className="collapse-container">
                {propertyTypes.map((type, index) => (
                  <div key={index} className="collapse-opt">
                    <button
                      className={`property-button ${selectedPropertyTypes.includes(type) ? 'active' : ''}`}
                      onClick={() => handlePropertyTypeClick(type)}
                    >
                      {type}
                    </button>
                  </div>
                ))}
              </div>
            </Collapsible>
            <hr />
            <Collapsible trigger="Category">
              <div className="collapse-container">
                {categoryType.map((category, index) => (
                  <div key={index} className="collapse-opt">
                    <button
                      className={`property-button ${selectedCategories.includes(category) ? 'active' : ''}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  </div>
                ))}
              </div>
            </Collapsible>
            <hr />
            <Collapsible trigger="No. of Bedrooms">
              <div className="collapse-container">
                {bhkType.map((bhkk, index) => (
                  <div key={index} className="collapse-opt">
                    <button
                      className={`property-button ${selectedBhk.includes(bhkk) ? 'active' : ''}`}
                      onClick={() => handleBhkClick(bhkk)}
                    >
                      {bhkk}
                    </button>
                  </div>
                ))}
              </div>
            </Collapsible>
            <hr />
            <Collapsible trigger="Status">
              <div className="collapse-container">
                {statusType.map((cstatus, index) => (
                  <div key={index} className="collapse-opt">
                    <button
                      className={`property-button ${selectedStatus.includes(cstatus) ? 'active' : ''}`}
                      onClick={() => handleStatusClick(cstatus)}
                    >
                      {cstatus}
                    </button>
                  </div>
                ))}
              </div>
            </Collapsible>
            <hr />
            <Collapsible trigger="Facing">
              <div className="collapse-container">
                {facingType.map((face, index) => (
                  <div key={index} className="collapse-opt">
                    <button
                      className={`property-button ${selectedFacing.includes(face) ? 'active' : ''}`}
                      onClick={() => handleFacingClick(face)}
                    >
                      {face}
                    </button>
                  </div>
                ))}
              </div>
            </Collapsible>
            <hr />
            <Collapsible trigger="Purchase Type">
              <div className="collapse-container">
                {purType.map((purc, index) => (
                  <div key={index} className="collapse-opt">
                    <button
                      className={`property-button ${selectedPtype.includes(purc) ? 'active' : ''}`}
                      onClick={() => handlePTypeClick(purc)}
                    >
                      {purc}
                    </button>
                  </div>
                ))}
              </div>
            </Collapsible>
          </div>
        </div>
        <div className='f-cards col-7'>
          {data.map((item, index) => (
            <>
              <div className='d-card' key={index} onClick={() => handleCardClick(item)}>
                <div className='list-home d-flex flex-row'>
                  <img className='property-img' src={item.img} alt={item.projectname} />
                  <div className='p-4'>
                    <h4 className='proj-title'> {item.projectname.toUpperCase()}</h4>
                    <h5 className='proj-price'><span style={{color:"red"}}>{item.price} $   </span> <span style={{color:"#c7c7c7",fontSize:"18px"}}>@7.5$/- per sqyd</span></h5>
                    <h6 className='proj-ptype'>{item.propertytype}</h6>
                    <div className='face-card'>
                      <h6 className='proj-date'><span><KingBedRoundedIcon style={{fontSize:"x-large "}}/></span> {item.noofbedrooms}</h6>
                      <h6 className='proj-date'><span><SyncDisabledIcon style={{fontSize:"large "}}/></span>{item.purchasetype}</h6>
                    </div>
                    <div className='face-card'>
                      <h6 className='proj-date'><span><ExploreIcon style={{fontSize:"large "}}/></span> {item.facing.toUpperCase()} Facing</h6>
                      <h6 className='proj-date'><span><ConstructionIcon style={{fontSize:"large "}}/></span> {item.constructionstatus}</h6>
                    </div>
                    <div className='face-card'>
                      <h6 className='proj-date'>Posted on: {item.date}</h6>
                      <h6 className='proj-date'>Category: {item.category}</h6>
                    </div>
                  </div>
                </div>
              </div>
             {getAdCard(index/2)}
              
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Datefilter;