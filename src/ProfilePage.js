import React, { useState, useEffect } from 'react';
import './ProfilePage.css'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ProfilePage(){
    const mockResponse = {
      name: 'John Doe',
      gender: 'Male',
      language: ['English', 'French'],
      attractions: ["Museums", "Zoos", "Aquariums", "Beaches"]
    };
    const [profile, setProfile] = useState({name: '', gender: '', language: [], attractions: []});
    const location = useLocation();

    useEffect(() => {
                fetchProfile();
            }, []);

    async function fetchProfile() {
        const data = mockResponse;
        setProfile(data);

//        const searchParams = new URLSearchParams(location.search);
//        const username = searchParams.get('username');
//        fetch(`/api/guide/search/${username}/profile`)
//              .then(response => {
//                return response.json();
//              })
//              .then(data => {
//                setProfile(data);
//              })
//              .catch(error => {
//                      console.error('Error fetching profile:', error);
//                    });
    }

  return (
    <div className="profile">
      <div>
          <h2>{profile.name}</h2>
          <div>
            <strong>Gender:</strong> {profile.gender}
          </div>
          <div>
            <strong>Languages:</strong>
            <ul>
              {profile.language.map((lan, index) => (
                <li key={index}>{lan}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Attractions:</strong>
            <ul>
              {profile.attractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default ProfilePage;
