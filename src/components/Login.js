import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import {Link} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password:""
           
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onSubmit() {
        alert('hello');
        this.props.history.push('/login');
    }

    onInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

  render() {
    return (
        <div className="container mt-5">
            <div className="row text-center mt-3">
                <div className="col-12">
                <Typography variant="h5" gutterBottom className="text-center">
                   Login
                </Typography>
                <div className="login-image-block">
                     <img src="/img/login.png" className="login-image mt-4"/>
                </div>

                 <ValidatorForm ref="form" onSubmit={this.onSubmit}>
                        <TextValidator fullWidth className="mt-3" variant="outlined"
                                        name="email" label="Email"
                                        placeholder=""
                                        value={this.state.email}
                                        onChange={this.onInputChange}
                                        validators={['required', 'isEmail']}
                                        errorMessages={['Email is required', 'Email is not valid']}
                          />

                          <TextValidator fullWidth className="mt-4" variant="outlined"
                                        name="password" label="Password" type="password"
                                        placeholder=""
                                        value={this.state.password}
                                        onChange={this.onInputChange}
                                        validators={['required']}
                                        errorMessages={['Password is required']}
                           />
                     <Button variant="contained" size="large" color="primary" className="login-button mt-4" type="submit" >
                         Submit
                         </Button>
                    </ValidatorForm>
                <br/>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;
