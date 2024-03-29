import React from 'react';
import './App.css';
import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import BecomeGuideForm from './BecomeGuideForm';
import ProfilePage from './ProfilePage';
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
       }
   }});


function App({ signOut}) {
//When withAuthenticator wraps the App component, it automatically injects the signOut method into the props of the component.

  return (
    <div className="app">
      <Router>
        <Header signOut={signOut}/> {/* Pass signOut method as a prop */}
        
        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/become_guide">
            <BecomeGuideForm />
          </Route>
          <Route path="/guide_profile">
            <ProfilePage />
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
