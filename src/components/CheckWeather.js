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
            weatherData: [],
            temperature: [],
            weather: []
           
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    getClimate(){    
        let city = this.state.city;
        city = city.charAt(0).toUpperCase() + city.slice(1);
        fetch(
            `https://openweathermap.org/data/2.5/weather?q=${city},IN&appid=b6907d289e10d714a6e88b30761fae22`
          ).then(res => res.json())
          .then((data) => {
              this.setState({
                weatherData: data,
                temperature: data.main,
                weather: data.weather,
                climate: this.state.weather[0]
              })
          }).catch(err => console.error(err));
    }
    
    onSubmit() {
        console.log('inside submit method')
        this.getClimate();
        
    }

    onInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

  render() {
    let climate = this.state.weather[0] || { main: "" };
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
                     <Button variant="contained" size="small" color="primary" className="login-button mt-4" type="submit" >
                         Search
                    </Button>
                    <br />
                    {this.state.weatherData.length !== 0 ? (
            <div className="mt-5">
               <Typography variant="body1" gutterBottom className="text-center" >
                        <span className="heading">Temperature </span>: {this.state.temperature.temp}
                </Typography>

                 <Typography variant="body1" gutterBottom className="text-center mt-3" >
                 <span className="heading">Wind Speed </span>: {this.state.temperature.pressure}
                </Typography>

                <Typography variant="body1" gutterBottom className="text-center  mt-3" >
                <span className="heading">Humidity</span> : {this.state.temperature.humidity}
                </Typography>

                 <Typography variant="body1" gutterBottom className="text-center  mt-3" >
                 <span className="heading">Climate </span>: {climate.main}
                </Typography>

                <Typography variant="body1" gutterBottom className="text-center  mt-3" >
                <span className="heading">Description </span>: {climate.description}
                </Typography>

            </div>
          ) : (
            undefined
          )}
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
