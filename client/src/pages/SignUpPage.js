
import React, { useState } from 'react';
import logo from '../images/logo2.png';
import { useHistory } from 'react-router-dom';


function SignUpPage(props) {

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function signUp() {
    console.log(fName);
    const response = await fetch('/api/users/sign', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: fName,
        lastName: lName,
        email: email,
        username: uName,
        password: password
      })
    });

    if (response.status === 200) {
      history.push('/login');
    } else {
      alert("Sign up was unsuccessful. Please try again.");
    }
    console.log(response);

  }

  

  return (
    <div>


      <div className='container'>

        <div className='OutterBox shadow'>

          <div className='signupMove'>
            <h1> <img className='logo2' src={logo} alt='<' /> Drama Tracker</h1>
            <br />

            <h2 className="LoginPageh2">Create Your Account</h2>
            <br />
            <div className="SignUpField"> <input className="changeInput rounded profileInput" type="text" value={fName} placeholder='  First Name' onChange={(e) => setFName(e.target.value)}></input> </div>
            <div className="SignUpField"> <input className="changeInput rounded profileInput" type="text" value={lName} placeholder='  Last Name' onChange={(e) => setLName(e.target.value)}></input> </div>
            <div className="SignUpField"> <input className="changeInput rounded profileInput" type="text" value={email} placeholder='  Email' onChange={(e) => setEmail(e.target.value)}></input> </div>
            <div className="SignUpField"> <input className="changeInput rounded profileInput" type="text" value={uName} placeholder='  Username' onChange={(e) => setUName(e.target.value)} ></input> </div>
            <div className="SignUpField"> <input className="changeInput rounded profileInput" type="password" value={password} placeholder='  Password' onChange={(e) => setPassword(e.target.value)} ></input> </div>
            <br />
            <button type="button" class="btn btn-primary" onClick={signUp} >Sign Up</button>

            {/* <div> Status: {result} </div> */}

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