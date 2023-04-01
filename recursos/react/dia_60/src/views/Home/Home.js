import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../../components/Header';

export default function Home() {

  return(
    <>
      <Header />

      <Container>
        <div className='text-center' style={{
          marginTop: '20px',
          marginBottom: '20px'
        }}>
          <h2> Esta es la pagina de inicio </h2>
        </div>

        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://previews.123rf.com/images/jozefklopacka/jozefklopacka1702/jozefklopacka170200100/71566520-road-in-a-beautiful-land-with-meadows-slovakia-central-europe-.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Busca y encontraras
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Flag_of_Venezuela_%28state%29.svg/2560px-Flag_of_Venezuela_%28state%29.svg.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Busca cualquier pais
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.istockphoto.com/photos/group-of-happy-multiethnic-people-standing-on-a-white-background-picture-id484348057?k=20&m=484348057&s=612x612&w=0&h=kZzsxqlT7WYlgRioD_eqNqQr3L5_DB-OkLbV94WJsHk=" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Busca informacion
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

