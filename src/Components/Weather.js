import React from 'react'

class Weather extends React.Component{
    render(){
        return(
            <div className="weather_info">
                {
                   this.props.city && this.props.country && <p className="weather__key">Location: 
                    <span className="weather__value"> {this.props.city}, {this.props.country} </span>
                   </p>
                }

                {
                   this.props.temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value"> {this.props.temperature}   </span>
                    </p>
                }
                
                {
                   this.props.description && <p className="weather__key">Description: 
                    <span className="weather__value"> {this.props.description} </span>
                   </p> 
                }

                {
                   this.props.error && <p className="weather__error">{this.props.error}</p>
                }
            </div>
        ); 
    }
};

export default Weather;