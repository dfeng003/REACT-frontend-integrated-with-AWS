import React, { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';
import './Filters.css'
import { Button} from "@material-ui/core";

function Filters ({ isOpen, onClose, onConfirm }){
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const languages = ["English", "Chinese", "Japanese", "Korean", "Spanish", "French", "German", "Italian"];
  const attractions = ["Museums", "Zoos", "Aquariums", "Beaches", "Historical Sites", "Art Galleries",
                        "Amusement Parks", "Botanical Gardens", "Hiking Tracks", "Local Cuisines"]

  const handleLanguageChange = (e) => {
    setSelectedLanguages(Array.from(e.target.selectedOptions, option => option.value));
  };

  const handleAttractionChange = (e) => {
    setSelectedAttractions(Array.from(e.target.selectedOptions, option => option.value));
  };

  const handleConfirm = () => {
    const filters = {
      languages: selectedLanguages,
      attractions: selectedAttractions,
    };
    onConfirm(filters);
    onClose();
  };

  return (
    <div className="filters">
      <div className="popup-inner">
        <div>
          <label className="filters-label"> Languages</label>
          <div className="filters-container">
              {languages.map((language, index) => (
                <div key={index} className="filters-checkbox">
                  <label>
                    <input type="checkbox" value={language} onChange={handleLanguageChange} />
                    {language}
                  </label>
                </div>
              ))}
            </div>
        </div>
        <div>
          <label className="filters-label">Attractions</label>
          <div className="filters-container">
            {attractions.map((attraction, index) => (
              <div key={index} className="filters-checkbox">
                <label>
                  <input type="checkbox" value={attraction} onChange={handleAttractionChange} />
                  {attraction}
                </label>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={handleConfirm}>Confirm</Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default Filters