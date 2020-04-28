import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Login from "../images/Login background.png";

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://anywherefitness-api.herokuapp.com/auth/login", credentials)
      .then((res) => {
        console.log(res);
        setCredentials({
          username: "",
          password: "",
        });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="signUpContainer">
      <div className="signUpImage mx-auto">
        <img src={Login} alt="Woman practicing yoga" className="w-100"></img>
      </div>
      <div className="signUpFormContainer">
        <div className="signUpForm mx-auto">
          <h1 className="font-weight-bold mb-5">Sign In</h1>
          <Form onSubmit={submit}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </FormGroup>
            <Button className="w-25">Confirm</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
