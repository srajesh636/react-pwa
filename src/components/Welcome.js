import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
        <div className="container mt-5">
            <div className="row text-center mt-3">
                <div className="col-12">
                <Typography variant="h4" gutterBottom className="text-center" color="primary">
                   Weather Dada
                </Typography>
                <div className="login-image-block">
                     <img src="/img/welcome.png" className="login-image mt-4"/>
                </div>
                <Typography variant="h6"  className="text-center mt-4" >
                   Welcome to Weather Dada ! <br/>Check the weather before <br/>you leave. 
                </Typography>
                <Button variant="contained" size="large" color="primary" className="login-button mt-4" component={Link} to="/login">
                    Sign in
                </Button>
                <br/>
                <Button variant="outlined" size="large" color="primary" className="login-button mt-3" >
                    Sign up for free
                </Button>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;
