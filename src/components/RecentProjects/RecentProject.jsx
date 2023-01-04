import React, { Component, Fragment } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import project1 from '../../assets/image/page1.png'
import project2 from '../../assets/image/page2.png'
import project3 from '../../assets/image/page3.png'

export default class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="service_title text-center">Recent Projects</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={6}>
              <div className="project-card p-3">
                <Card>
                  <Card.Img variant="top" src={project1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
            <div className="project-card p-3">
                <Card>
                  <Card.Img variant="top" src={project2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
            <div className="project-card p-3">
                <Card>
                  <Card.Img variant="top" src={project3} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}