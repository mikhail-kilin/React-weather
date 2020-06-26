import React, { Component } from "react";
import { Table, Row, Col} from "react-bootstrap";

export default class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  componentDidMount() {
    console.log(this.props.zip);
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }

  render() {
    if (this.state.weatherData == null) {return "loading...";}
    const weatherData = this.state.weatherData.main;
    const iconData = this.state.weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + iconData.icon + ".png";
    return (
      <Row>
        <Col md={{ span: 4, offset: 4 }} className="center">
          <Table bordered='true'>
            <td>
              <h4>Current weather: </h4>
              <div><img src={iconUrl} alt={iconData.description}/></div>
              <div>Temp now: {weatherData.temp} °C</div>
              <div>Temp min: {weatherData.temp_min} °C</div>
              <div>Temp max: {weatherData.temp_max} °C</div>
            </td>
          </Table>
        </Col>
        <Col md="4"/>
      </Row>
    );
  }
}
