import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './image/bg.png'
import { useState } from 'react';
import data from './data.js';// eslint-disable-next-line


function App() {

  let [shoes] = useState(data)// eslint-disable-next-line

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
          {
            shoes.map(function(a, i){
              return(
                <Card shoes = {shoes[i]} i={i}></Card>
              )
            })
          }
        </div>
      </div>

    </div>
  );
}
function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="80%" alt='1'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}


export default App;
