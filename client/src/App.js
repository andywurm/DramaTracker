import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ShowPage from './pages/ShowPage';
import MoviePage from './pages/MoviePage';
import MyListPage from './pages/MyListPage';
import LoginPage from './pages/LoginPage';
import WatchingPage from './pages/WatchingPage';
import PlanPage from './pages/PlanPage';

import search from '../src/images/search.png';
import logo from '../src/images/logo.png';

import './App.css';
import './HomeStyle.css';
import './MyListStyle.css';


function Navigation(props) {
  return (

    <nav className="navbar navbar-expand-sm shadow-sm mb-4 navbar-dark bg-primary">
      <Link className="navbar-brand"  exact to="/"> <img className='logo' src={logo} alt='<'></img>  Drama Tracker</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/shows">
            Shows
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/mylist">
            My List
          </NavLink>
        </li>
      </ul>

      <div className='input-group'>
        <input className="form-control rounded inputbar" type="text" placeholder="Search"></input>
      <button className='input-group-addon'> <img className='searchPls' src={search} alt='s'></img></button>
      </div>
    
      <ul className="navbar-nav">
      <li className="nav-item login">
          <NavLink className="nav-link" exact to="/login">
          &nbsp; Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shows" component={ShowPage} />
              <Route path="/movies" component={MoviePage} />
              <Route path="/mylist" component={MyListPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/watching" component={WatchingPage} />
              <Route path="/plan" component={PlanPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
