import React from 'react';
import logo from '../images/logo2.png';

function LoginPage(props) {
  return (
    <div>

      <div className='rectLog shadow'>
        <br />
        <br />
        <div className='container'>

          <h1> <img className='logo2' src={logo} alt='<' /> Drama Tracker</h1>

          <div className='LoginHere'>

            <h2 className="LoginPageh2">Login</h2>
            <div className='ActualLoginHere'>
              <div className="LoginField"> <input className="changeInput rounded profileInput" type="text" placeholder='  Username' ></input> </div>
              <div className="LoginField"> <input className="changeInput rounded profileInput" type="password" placeholder='  Password' ></input> </div>

              <br />
              <button type="button" class="btn btn-primary">Login</button>

              <p className="DontHaveAccount">Don't have an account? <a className='SignUpLink' href="/signup">Sign up here!</a> </p>
            </div>

          </div>
        </div>
      </div>

      <br />

      <div class="footer-copyright text-center py-5">© 2022 Copyright:
        Drama Tracker
      </div>
    </div>
  );
}

export default LoginPage;