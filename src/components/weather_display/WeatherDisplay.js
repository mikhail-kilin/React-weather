import React, { Component } from "react";
import Day from "../day/Day"
import CurrentWheather from "../current_weather/CurrentWeather"
import { Table } from "react-bootstrap";

export default class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/forecast/daily?id=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }

  render() {
    const days = this.state.weatherData;
    return (
      <div>
        <CurrentWheather zip={this.props.zip}/>
        <Table bordered='true' className="center">
          <thead>
            <tr>
              <th>Day of week</th>
              <th>Icon</th>
              <th>Temp day</th>
              <th>Temp night</th>
            </tr>
          </thead>
          <tbody>
            {days == null ? <tr><td>"loading..."</td></tr> : days.list.map((data, index) => (<Day key={index} index={index} data={data}/>))}
          </tbody>
        </Table>
      </div>
    );
  }
}
