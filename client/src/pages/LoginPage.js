import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';
import logo from '../images/logo2.png';

function LoginPage(props) {

  const {setUser} = useContext(UserContext);
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function Login() {
    const response = await fetch('/api/users/log', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: uName,
        password: password
      })
    }
    ,
    {withCredentials: true}
   
    );

    const body = await response.json();
    console.log(body);

    console.log(response);

    if (response.status === 200) {
      setUser(body.value);
      history.push('/');
    } else {
      alert("Login was unsuccessful. Please try again.");
    }
    console.log(response);


  }



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
              <div className="LoginField"> <input className="changeInput rounded profileInput" type="text" value={uName} placeholder='  Username' onChange={(e) => setUName(e.target.value)}></input> </div>
              <div className="LoginField"> <input className="changeInput rounded profileInput" type="password" value={password} placeholder='  Password' onChange={(e) => setPassword(e.target.value)}></input> </div>

              <br />
              <button type="button" class="btn btn-primary" onClick={Login}>Login</button>

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