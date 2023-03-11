import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar bg="primary" variant='dark' sticky='top' className='py-3'>
            <Container fluid>
                <Navbar.Brand className='justify-content-between'>Solomon Santos | Full Stack Developer</Navbar.Brand>
                <Nav>
                    <Nav.Link className='text-light' href="#home">Home</Nav.Link>
                    <Nav.Link className='text-light' href="#projects">Projects</Nav.Link>
                    <Nav.Link className='text-light' href="#about">About</Nav.Link>
                    <Nav.Link className='text-light' href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;