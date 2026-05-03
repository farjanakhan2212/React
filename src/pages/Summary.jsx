import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Summary = () => {
  return (
    <Container className="my-4">
      {/* First Row */}
      <Row className="g-3">
        <Col md={4}>
          <Card className="text-center bg-success text-light">
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Text className="fs-5 fw-bolder">
                {/* Replace with dynamic data */}
                120
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center bg-danger text-light">
            <Card.Body>
              <Card.Title>Purchases</Card.Title>
              <Card.Text className="fs-5 fw-bolder">
                {/* Replace with dynamic data */}
                80
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center bg-warning text-dark">
            <Card.Body>
              <Card.Title>Customers</Card.Title>
              <Card.Text className="fs-5 fw-bolder">
                {/* Replace with dynamic data */}
                50
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Second Row */}
      <Row className="g-3 mt-3">
        <Col md={4}>
          <Card className="text-center bg-dark text-light">
            <Card.Body>
              <Card.Title>Inventory</Card.Title>
              <Card.Text className="fs-5 fw-bolder">
                {/* Replace with dynamic data */}
                200
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center bg-info text-light">
            <Card.Body>
              <Card.Title>Account</Card.Title>
              <Card.Text className="fs-5 fw-bolder">
                {/* Replace with dynamic data */}
                $5000
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center bg-primary text-light">
            <Card.Body>
              <Card.Title>Company</Card.Title>
              <Card.Text className="fs-5 fw-bolder">
                {/* Replace with dynamic data */}
                10
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Third Row */}
      <Row className="g-3 mt-3">
        <Col md={4}>
          <Card className="text-center bg-success text-light">
            <Card.Body>
              <Card.Title>Sales</Card.Title>
              <Card.Text className="fs-5 fw-bolder">
                {/* Replace with dynamic data */}
                $15000
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center bg-danger text-light">
            <Card.Body>
              <Card.Title>Stock</Card.Title>
              <Card.Text className="fs-5 fw-bolder">
                {/* Replace with dynamic data */}
                300
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center bg-dark text-light">
            <Card.Body>
              <Card.Title>Products</Card.Title>
              <Card.Text className="fs-5 fw-bolder">
                {/* Replace with dynamic data */}
                500
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Summary;
