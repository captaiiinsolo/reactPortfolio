import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar bg="light" variant="light" sticky='top'>
            <Container>
                <Navbar.Brand className='justify-content-between'>Solomon Santos | Full Stack Developer</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>'
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;