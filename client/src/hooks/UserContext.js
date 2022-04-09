import React, { useState, createContext, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = (props) => {

    useEffect(() => {
        fetch('/api/users/check')
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setUser(data);
                }
            })

    }
        , []
    );

    function authenticate(username, password) {
        return fetch('/api/users/log', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Login Failed');
                }

                return response.json();
            })
            .then((body) => {
                setUser(body);
                console.log(body);
            });
    };

    function signout(cb) {
        return fetch('/api/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Logout Failed');
                }

                return response.json();
            })
            .then((body) => {
                setUser();
                console.log(body);
            });
    }

    const [user, setUser] = useState();
    return (
        <UserContext.Provider value={{ user, setUser, authenticate, signout }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
