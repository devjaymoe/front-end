import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Login from "../images/Login background.png";
<<<<<<< HEAD
import { connect } from "react-redux";
import { loginFetch } from "../store/actions";
import { useHistory } from "react-router-dom";
=======
import { connect } from 'react-redux';
import { loginFetch } from '../store/actions';
import { useHistory } from 'react-router-dom';
>>>>>>> 2bea032ea72edb66bd7b98b3267501379ee81e7a

const LoginForm = (props) => {
  const { push } = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
<<<<<<< HEAD
    role: "",
=======
    role: ''
>>>>>>> 2bea032ea72edb66bd7b98b3267501379ee81e7a
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  //console.log(props.success)
  const submit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    props.loginFetch(credentials);
    setCredentials({
      username: "",
      password: "",
    });
    push("/classes");
=======
    props.loginFetch(credentials)
    setCredentials({
      username: "",
      password: ""
    })
    push('/classes')
>>>>>>> 2bea032ea72edb66bd7b98b3267501379ee81e7a
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
            <FormGroup tag="fieldset">
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    id="client"
                    name="role"
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
                    name="role"
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

<<<<<<< HEAD
const mapStateToProps = (state) => {
=======
const mapStateToProps = state => {
>>>>>>> 2bea032ea72edb66bd7b98b3267501379ee81e7a
  return {
    success: state.login.success,
    isFetching: state.login.isFetching,
    error: state.login.error,
<<<<<<< HEAD
    token: state.login.token,
  };
};
=======
    token: state.login.token
  }
}
>>>>>>> 2bea032ea72edb66bd7b98b3267501379ee81e7a

export default connect(mapStateToProps, { loginFetch })(LoginForm);
