import logo from './logo.svg';
//import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { PizzaCard } from "./components/PizzaCards";
import { Confirmation } from "./components/Confirmation";
import pizzas from "./data";

function App() {
  return (
    <div>
      <Confirmation />

      <Container>
        <Row>
          <Col className='bg-primary'>
            <h1>Hello there</h1>
          </Col>
          <Col className='bg-success col-8'>
            <h1>Hello there</h1>
          </Col>
        </Row>
        <Row>
          <PizzaCard data={pizzas[0]} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
