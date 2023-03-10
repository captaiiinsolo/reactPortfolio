import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';

function Header() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="text-center">Testing Header Text</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;