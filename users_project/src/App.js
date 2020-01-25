import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: '60px', height: '100%' }}>
        <Switch>
          <Route path='/' exact component={Users}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/contact' exact component={Contact}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
