import React, { Component } from "react";
import { Tab } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav } from "react-bootstrap";
import "../assets/style.css";
import Tickets from "../Components/Tickets";
import Block from "./BlockLeft";

export default class Main extends Component {
  render() {
    return (
      <Container className="container">
        <Tab.Container id="tabs-example" defaultActiveKey="first">
          <Row>
            <Col className="col-left" sm={3}>
              <Block />
            </Col>

            <Col className="col-right" sm={9}>
              <Row>
                <Nav variant="pills" className="nav flex-row">
                  <Nav.Item className="nav-item">
                    <Nav.Link className="link" eventKey="first">
                      Самый дешевый
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item className="nav-item">
                    <Nav.Link className="link" eventKey="second">
                      Самый быстрый
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item className="nav-item nav-item-3">
                    <Nav.Link className="link" eventKey="third">
                      Оптимальный
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
              <Row>
                <Tickets />
              </Row>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
