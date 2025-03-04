import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();

    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = 'en-US';

    recognitionInstance.onstart = () => setIsListening(true);
    recognitionInstance.onend = () => setIsListening(false);
    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };

    setRecognition(recognitionInstance);
  }, []);

  const handleStartListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className='card-search'>
        <div className='top-sec'>
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
            <option>Farm House</option>
            <option>Villa</option>
            <option>Plot</option>
          </select>
          <div className='bot-bar'>
            <SearchOutlinedIcon style={{ margin: '5px 10px' }} />
            <input
              type='text'
              placeholder='Search by Location'
              className='search-input'
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <MyLocationIcon style={{ color: '#0078db', margin: '5px 20px' }} />
            <KeyboardVoiceIcon
              style={{ color: '#0078db', margin: '5px 20px' }}
              onClick={handleStartListening}
            />
            <button className='se-button'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
