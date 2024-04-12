import React from 'react';
import './ProfilePage.css'


const mockProfileData = {
  name: 'John Doe',
  gender: 'Male',
  language: 'English',
  attractions: ["Museums", "Zoos", "Aquariums", "Beaches"]
};

// TODO: call API to retrieve data

function ProfilePage(){
  return (
    <div className="profile">
      <h2>Profile Information</h2>
      <div>
        <strong>Name:</strong> {mockProfileData.name}
      </div>
      <div>
        <strong>Gender:</strong> {mockProfileData.gender}
      </div>
      <div>
        <strong>Language:</strong> {mockProfileData.language}
      </div>
      <div>
        <strong>Attractions:</strong>
        <ul>
          {mockProfileData.attractions.map((attraction, index) => (
            <li key={index}>{attraction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
