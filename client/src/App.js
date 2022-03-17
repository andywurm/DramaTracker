import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PopDown from './components/PopDown.js';

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
import SignUpPage from './pages/SignUpPage';
import WatchingPage from './pages/WatchingPage';
import PlanPage from './pages/PlanPage';
import DisplayContentPage from './pages/DisplayContentPage';
import ActorsPage from './pages/ActorsPage';
import SearchedPage from './pages/SearchedPage';

import search from '../src/images/search.png';
import logo from '../src/images/logo.png';

import './App.css';
import './HomeStyle.css';
import './MyListStyle.css';
import './LoginStyle.css';
import './SignUpStyle.css';
import './DisplayStyle.css';
import './ActorStyle.css';

function Navigation(props) {


  const history2 = useHistory();
  const [searched, setSearched] = useState("");

  function handleEnter(event) {
    if (event.key === 'Enter') {
      history2.push('/search', { searched });
    }
  }

  return (

    <nav className="navbar navbar-expand-sm shadow-sm mb-4 navbar-dark bg-primary">
      <Link className="navbar-brand" exact to="/"> <img className='logo' src={logo} alt='<'></img>  Drama Tracker</Link>
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
        <input className="form-control rounded inputbar" type="text" placeholder="Search"
          onKeyPress={handleEnter}
          onChange={(e) => setSearched(e.target.value)} /> {console.log(searched)}

        <button className='input-group-addon'
          onClick={() => {
            history2.push('/search', { searched });
          }}>

          <img className='searchPls' src={search} alt='s'></img></button>
      </div>

      {props.user ? <div className='userNameDisplay'>&nbsp;<PopDown username={props.user.username}/>&nbsp;</div> :
        <ul className="navbar-nav">
          <li className="nav-item login">
            <NavLink className="nav-link" exact to="/login">
              &nbsp; Login
            </NavLink>
          </li>
        </ul>}

    </nav>
  );
}

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    document.title = "Drama Tracker"
 }, []);

  return (
    <Router>
      <Navigation user={user} />
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shows" component={ShowPage} />
            <Route path="/movies" component={MoviePage} />
            <Route path="/mylist" component={MyListPage} />
            <Route path="/login" render={(props) => <LoginPage setUser={setUser} />} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/watching" component={WatchingPage} />
            <Route path="/plan" component={PlanPage} />
            <Route path="/content" component={DisplayContentPage} />
            <Route path="/actors" component={ActorsPage} />
            <Route path="/search" component={SearchedPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}




export default App;
