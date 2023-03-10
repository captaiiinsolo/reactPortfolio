import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import Navigation from './Navigation'

function Header() {
    return (
        <Container fluid>
           <Navigation />
        </Container>

    )
}

export default Header;