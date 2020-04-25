import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SignUp = props => {
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const submit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", credentials)
            .then(res => {
                // res,data,payload
                // redux - send the token to the redux store
                // browser storage - localStorage (this is probably the least secure choice)
                // cookies
                // localStorage.setItem("token", JSON.stringify(res.data.payload));
                // props.history.push("/friends-list");
                console.log(res)
            })
            .catch(err => console.log({ err }));
    };

    return (
      <div>
        <h1>Sign-Up</h1>
        <form onSubmit={submit}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    )
};

export default SignUp;