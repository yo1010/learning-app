import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import Home from './scripts/components/views/Home';
import Nav from './scripts/components/partials/Nav/Nav';
import OurJourney from './scripts/components/views/OurJourney';

function App() {
  AOS.init({duration: 1200})

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ourjourney" component={OurJourney} />
      </Switch>
    </div>
  );
}

export default App;
