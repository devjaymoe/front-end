import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Login from "../images/Login background.png";

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    roles: [],
  });
  const handleChange = (e) => {
    if (e.target.name === "roles") {
      const rolesArray = ["init"];
      rolesArray.pop();
      rolesArray.push(e.target.value);
      setCredentials({
        ...credentials,
        roles: rolesArray,
      });
    } else {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      });
    }
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://anywherefitness-api.herokuapp.com/auth/register",
        credentials
      )
      .then((res) => {
        console.log(res);
        setCredentials({
          username: "",
          email: "",
          password: "",
          roles: [],
        });
      })
      .catch((err) => console.log( {err} ));
  };
  return (
    <div className="signUpContainer">

      <div className="signUpImage mx-auto">
        <img src={Login} alt="Woman practicing yoga" className="w-100"></img>
      </div>

      <div className="signUpFormContainer">
        <div className="signUpForm mx-auto">
          <h1 className="font-weight-bold mb-5">Sign Up</h1>
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
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={credentials.email}
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
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup tag="fieldset">
              <legend>
                Would you like to register as a client or an instructor?
              </legend>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    id="client"
                    name="roles"
                    value="client"
                    onChange={handleChange}
                  />{" "}
                  I'm a client.
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    id="instructor"
                    name="roles"
                    value="instructor"
                    onChange={handleChange}
                  />{" "}
                  I'm an instructor.
                </Label>
              </FormGroup>
            </FormGroup>
            <Button className="w-25">Confirm</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
