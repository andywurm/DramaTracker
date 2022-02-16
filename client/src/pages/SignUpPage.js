import React from 'react';
import logo from '../images/logo2.png';

function SignUpPage(props) {
  return (
    <div>

      <div className='container'>

        <div className='OutterBox shadow'>

          <div className='signupMove'>
          <h1> <img className='logo2' src={logo} alt='<' /> Drama Tracker</h1>
          <br/>
          {/* <br/> */}
          <h2 className="LoginPageh2">Create Your Account</h2>
          <br/>
          <div className="SignUpField"> <input className="changeInput rounded profileInput" type="text" placeholder='  First Name' ></input> </div>
          <div className="SignUpField"> <input className="changeInput rounded profileInput" type="text" placeholder='  Last Name' ></input> </div>
          <div className="SignUpField"> <input className="changeInput rounded profileInput" type="text" placeholder='  Email' ></input> </div>
          <div className="SignUpField"> <input className="changeInput rounded profileInput" type="text" placeholder='  Username' ></input> </div>
          <div className="SignUpField"> <input className="changeInput rounded profileInput" type="text" placeholder='  Password' ></input> </div>
          <br />
          <button type="button" class="btn btn-primary">Sign Up</button>

          </div>

        </div>

      </div>


      <div class="footer-copyright text-center py-5">© 2022 Copyright:
        Drama Tracker
      </div>

    </div>
  );
}

export default SignUpPage;