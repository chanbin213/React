import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './image/bg.png'
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div>
        <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>{shoes[0].title}</h4>
            <p>가격 : {shoes[0].price}원</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>{shoes[1].title}</h4>
            <p>가격 : {shoes[1].price}원</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>{shoes[2].title}</h4>
            <p>가격 : {shoes[2].price}원</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
