import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              src='/logo.png'
              alt='logo'
              style={{
                width: '100px',
              }}
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='ms-auto'>
            <LinkContainer to='/about'>
              <Nav.Link>about</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/experience'>
              <Nav.Link>experience</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/portfolio'>
              <Nav.Link>portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link>contact</Nav.Link>
            </LinkContainer>{' '}
          </Nav>
          <Nav className='ms-auto'>
            {/* <Button>
              <small>
                <b>Download My CV</b>
              </small>
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
