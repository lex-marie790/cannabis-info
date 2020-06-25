import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

//components
import Effects from './Components/Effects';
import Flavors from './Components/Flavors';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/effects'>Effects</Link>
          <Link to='/flavors'>Flavors</Link>
        </div> 

        <Switch>
          {/* <Route path='/effects' component={Effects} />
          <Route path='/flavors' component={Flavors} />
          <Route path='/' component={Home} /> */}
        </Switch>
      </div>
        
    </Router>

  );
}

export default App;
