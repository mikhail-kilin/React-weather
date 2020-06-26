import React, { Component } from "react";

export default class Day extends Component {
  getWeekDay(date) {
    var days = ['Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'];
    var day = date.getDay();
    return days[day];
  }

  render() {
    const iconData = this.props.data.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + iconData.icon + ".png";
    const date = new Date();
    const temp = this.props.data.temp;
    date.setDate(date.getDate() + this.props.index);

    return (
      <tr>
        {console.log(date)}
        <td>{this.getWeekDay(date)}</td>
        <td><img src={iconUrl} alt={iconData.description}/></td>
        <td>{temp.day} °C</td>
        <td>{temp.night} °C</td>
      </tr>
    );
  }
}
