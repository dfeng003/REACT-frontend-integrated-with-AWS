import React, { useState, useEffect } from 'react';
import './ProfilePage.css'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {URL} from "./App";
import Card from "./Card";
import TextCard from "./TextCard";

function ProfilePage(){
    const [profile, setProfile] = useState({name: '', gender: '', languages: [], attractions: [], photoUrl:'', description:'', score:0});
    const location = useLocation();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
                fetchProfile();
            }, []);

    async function fetchProfile() {
        try{
            const searchParams = new URLSearchParams(location.search);
            const username = searchParams.get('username');
            const response = await fetch(`${URL}/api/guide/${username}/profile`)
            const data = await response.json();
            setProfile(data);
            const reviews_response = await fetch(`${URL}/api/guide/${username}/comments`);
            const reviews_data = await reviews_response.json();
            setReviews(reviews_data);
        } catch (error) {
            console.log("Error fetching profile: ", error);
        }
    }

  return (
    <div className="profile">
       <Card className="info"
          is_detailed={true}
          src={profile.photoUrl}
          title={profile.name}
          gender={profile.gender}
          email={profile.email}
          phone={profile.phone}
          language={profile.languages.join(', ')}
          attraction={profile.attractions.join(', ')}
          score={profile.score}
       />
       <div className="paragraphs">
           <TextCard className="para-it"
            title='Self Intro'
            content={profile.description}
           />
           <div className="reviews">
               <h4 className="review_title">Reviews</h4>
               {reviews.map((review, index) => (
                               <TextCard key={index}
                                   score={review.score}
                                   content={review.comment}
                               />
                           ))}
           </div>
       </div>
    </div>
  );
};

export default ProfilePage;
