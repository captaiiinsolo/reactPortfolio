import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactForm() {
  return (
    <Container>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <h1 className="my-5 text-dark">Contact Me</h1>

          <Form className="text-start my-5">
            <Form.Group className="mb-3" controlId="clientName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="clientName">
              <Form.Label>Company:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="clientEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="clientEmail">
              <Form.Label>Phone:</Form.Label>
              <Form.Control type="phone" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="clientMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" />
          </Form.Group>

          <div className="d-grid gap-2 d-flex justify-content-between">
          <Button variant="outline-danger" type="reset">Reset</Button>
          <Button variant="success" type="submit">Submit</Button>
          </div>

         </Form> 
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
