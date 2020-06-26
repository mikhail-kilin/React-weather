import "bootswatch/dist/cyborg/bootstrap.css";
import React, { Component } from 'react';
import WheatherDisplay from '../weather_display/WeatherDisplay'
import { Button, Container, Row, Col } from "react-bootstrap";

const PLACES = [
  { name: "Moscow", zip: "524901" },
  { name: "St Petersburg", zip: "536203" },
  { name: "Kazan", zip: "551487" },
  { name: "Naberezhnye Chelny", zip: "523750" },
  { name: "Bugulma", zip: "571170" },
  { name: "Almetyevsk", zip: "582432" },
  { name: "Elabuga", zip: "521118" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlace: 0
    };
  }

  render () {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 2 }}>
              <h2 className='center'>Weather in {PLACES[activePlace].name}:</h2>
              <hr/>
            </Col>
          </Row>
          
          <Row>
            <Col lg="2">
              {PLACES.map((place, index) => (
                <div key={index}>
                  <Button
                    size="sm"
                    id={place.name}
                    variant="outline-primary"
                    onClick={() => {
                      this.setState({ activePlace: index });
                    }}
                  >
                      {place.name}
                  </Button>
                </div>
              ))}
            </Col>
            <Col lg="10">
              <WheatherDisplay key={activePlace} zip={PLACES[activePlace].zip}></WheatherDisplay>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
