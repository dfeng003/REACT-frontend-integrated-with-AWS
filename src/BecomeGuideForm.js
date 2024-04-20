import React, { useState } from 'react';
import './BecomeGuideForm.css'
import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {URL} from "./App";

function BecomeGuideForm({ username }) {
    const languages = ["English", "Chinese", "Japanese", "Korean", "Spanish", "French", "German", "Italian"];
    const attractions = ["Museums", "Zoos", "Aquariums", "Beaches", "Historical Sites", "Art Galleries",
                            "Amusement Parks", "Botanical Gardens", "Hiking Tracks", "Local Cuisines"]
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedAttractions, setSelectedAttractions] = useState([]);

    const [formData, setFormData] = useState({
      username: username,
      name: '',
      gender: '',
      email:'',
      phone:'',
      description:'',
      language: '',
      attractions: '',
      photoUrl:'',
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (event) => {
      const { value, checked, name } = event.target;
      if(name == "language"){
        if (checked) {
            setSelectedLanguages([...selectedLanguages, value]);
        }else {
            // Remove the language from the selectedLanguages array if unchecked
            setSelectedLanguages(selectedLanguages.filter(lang => lang !== value));
        }
      } else {
        if (checked) {
            setSelectedAttractions([...selectedAttractions, value])
          } else {
              setSelectedAttractions(selectedAttractions.filter(lang => lang !== value));
          }
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const updatedFormData = {
                    ...formData,
                    language: selectedLanguages,
                    attractions: selectedAttractions,
                    photoUrl: `https://sgguide.s3.amazonaws.com/public/${file.name}`
                  };
      try {
        const response = await fetch(`${URL}/api/register_guide`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedFormData)
        });
      } catch (error) {
        console.error('Error registering guide:', error);
      }
    };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
    const result = await uploadData({
        key: file.name,
        data: file
       }).result;
      console.log('Succeeded: ', result);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };


    return (
      <div className="form-container">
        <h2 className="form-title">Enter your information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
              <label  className="form-label">Description:</label>
              <textarea
                name="description"
                className="form-input"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
                type="text"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
          </div>
          <div className="form-group">
            <label className="form-label">Phone:</label>
            <input
              type="text"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Gender:</label>
            <select
              name="gender"
              className="form-input"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Language:</label>
            <div className="filters-container">
              {languages.map((language, index) => (
                <div key={index} className="filters-checkbox">
                  <label>
                    <input  type="checkbox" value={language} name="language"
                          onChange={handleCheckboxChange}/>
                  {language}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Attractions:</label>
            <div className="filters-container">
                {attractions.map((attraction, index) => (
                  <div key={index} className="form-checkbox">
                    <label>
                      <input  type="checkbox" value={attraction} name="attraction"
                              onChange={handleCheckboxChange}/>
                      {attraction}
                    </label>
                  </div>
                ))}
              </div>
          </div>
          <div>
            <label className="form-label">Profile Photo:</label>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload</button>
          </div>
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    );
  };

export default BecomeGuideForm;
