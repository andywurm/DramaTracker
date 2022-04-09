const auth = {
    isAuthenticated: false,
    authenticate(username, password) {
      return fetch('/api/users/log', { 
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Login Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = true;
          return body;
        });
    },
    signout(cb) {
      return fetch('/api/users/logout', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Logout Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = false;
          return body;
        });
    }
  }
  
  export default auth;