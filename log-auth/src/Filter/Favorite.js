import React,{useEffect} from 'react';
import './Favourite.css'; 
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Favorite = ({ favorites,handleAddFav,handleContactOwner}) => {

  const isFavorited = (item) => favorites.some(fav => fav.price === item.price);
  useEffect(() => {
    console.log(favorites); 
  }, [favorites]);
  return (
    <div className='f-cards col-12'>
      {favorites.length === 0 ? (
        <div className='not-found-card'>
          <h2>No Favorites</h2>
          <h6>You have not favorited any property</h6>
        </div>
      ) : (
        <div>
          {favorites.map((item, index) => (
            <div className='d-car ' key={index}>
              <div className='list-hom d-flex flex-row'>
                <img className='property-img  ' src={item.img} alt={item.projectname} />
                <div className='p-4 col-'>
                  <div className='d-flex flex-row fav-row' >
                  <h4 className='proj-title'>{item.projectname.toUpperCase()}</h4>
                  
                  {isFavorited(item) ? (
                  <FavoriteIcon onClick={(e) => handleAddFav(e, item)}  style={{ color: 'red' }} /> 
                    ) : (
                          <FavoriteBorderOutlinedIcon onClick={(e) => handleAddFav(e, item)} />
                    )}  
                    </div>
                    <h5 className='proj-price'>
                    {item.price} $ <span>@7.5$/- per sqyd</span>
                  </h5>
                  <h6 className='proj-ptype'>{item.propertytype}</h6>
                  <div className='face-card'>
                    <h6 className='proj-date'>
                      {item.noofbedrooms} Bedrooms
                    </h6>
                    <h6 className='proj-date'>
                      {item.purchasetype}
                    </h6>
                  </div>
                  <div className='face-card'>
                    <h6 className='proj-date'>
                      {item.facing.toUpperCase()} Facing
                    </h6>
                    <h6 className='proj-date'>
                      {item.constructionstatus}
                    </h6>
                  </div>
                  <div className='face-card'>
                    <h6 className='proj-date'>Posted on: {item.date}</h6>
                    <h6 className='proj-date'>Category: {item.category}</h6>
                  </div>
                  <hr/>
                  <button  className='contact-btn' onClick={(e)=>handleContactOwner(e,item)}>Contact Owner</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

  );
};
                                                        
export default Favorite;                                                      
                      




