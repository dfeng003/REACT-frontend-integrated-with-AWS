import React , {useEffect, useState} from 'react';
import './App.css';
import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import BecomeGuideForm from './BecomeGuideForm';
import ProfilePage from './ProfilePage';
import BlogPage from './Blog';
import CalendarPage from './CalendarPage';
import PostBlogForm from './PostBlogForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
   Auth: {
        // Configuration for Cognito for user authentication and secure image upload
       Cognito:{
           userPoolId: "us-east-1_8465UNBWQ",
           userPoolClientId: "1k6krv82nbk8ph1adu726trevj",
           region: "us-east-1",
           identityPoolId: "ap-southeast-2:5ea5afd5-effd-4437-aa29-c32d9338df96"
       },
   },
   Storage: {
              // Configuration for S3 storage
              S3: {
                  bucket: 'sgguide', // Replace with your bucket name
                  region: 'us-east-1' // Replace with the region of your bucket
              }
   }
   });

// API gateway url
export const URL = "https://460f7cbimf.execute-api.us-east-1.amazonaws.com/www";

const signUpConfig = {
    signUpAttributes:['email']
};


function App({ signOut, user}) {
// When withAuthenticator wraps the App component, it automatically injects the signOut method into the props of the component.
// To run the app, use npm start
  return (
    <div className="app">
      <Router>
        <Header signOut={signOut} username={user.username}/> {/* Pass signOut method as a prop */}
        
        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/become_guide">
            <BecomeGuideForm username={user.username}/>
          </Route>
          <Route path="/guide_profile">
            <ProfilePage />
          </Route>
          <Route path="/calendar">
            <CalendarPage guideUsername={user.username}/>
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/post_blog">
            <PostBlogForm username={user.username}/>
          </Route>
          <Route path="/">
            <Banner />
          </Route>
        </Switch>

        <Footer />
      </ Router>
    </div>
  );
}

export default withAuthenticator(App, {
                                        signUpAttributes: ['email']
                                      });
