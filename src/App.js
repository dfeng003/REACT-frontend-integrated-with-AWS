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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
   Auth: {
       Cognito:{
           userPoolId: "us-east-1_8465UNBWQ",
           userPoolClientId: "1k6krv82nbk8ph1adu726trevj",
           region: "us-east-1"
           // TODO: need identitypoolid
       }
   },
   Storage: {
              // Configuration for S3 storage
              S3: {
                  bucket: 'sgguide', // Replace with your bucket name
                  region: 'us-east-1' // Replace with the region of your bucket
              }
   }
   });


function App({ signOut, user}) {
//When withAuthenticator wraps the App component, it automatically injects the signOut method into the props of the component.

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
            <CalendarPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
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

export default withAuthenticator(App);
