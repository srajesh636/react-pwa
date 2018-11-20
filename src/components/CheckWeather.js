import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Offline, Online } from "react-detect-offline";


class CheckWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: "",
           
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
        <Online>
            <div className="row text-center mt-3">
                <div className="col-12">
                <Typography variant="h5" gutterBottom className="text-center" >
                    Today's Weather
                </Typography>
                <div className="login-image-block">
                     <img src="/img/weather.png" className="login-image mt-4"/>
                </div>

                 <ValidatorForm ref="form" onSubmit={this.onSubmit}>
                        <TextValidator fullWidth className="mt-3" variant="outlined"
                                        name="city" label="City"
                                        placeholder=""
                                        value={this.state.city}
                                        onChange={this.onInputChange}
                                        validators={['required']}
                                        errorMessages={['City is required']}
                          />
                     <Button variant="contained" size="small" color="primary" className="login-button mt-5" type="submit" >
                         Search
                    </Button>
                    </ValidatorForm>
                <br/>
                </div>
            </div>
            </Online>
            <Offline>
            <div className="row text-center mt-3">
                <div className="col-12">
                <Typography variant="subtitle1" gutterBottom className="text-center" >
                    Please check your network connection
                </Typography>
                </div>
            </div>
            </Offline>
        </div>
    );
  }
}

export default CheckWeather;
