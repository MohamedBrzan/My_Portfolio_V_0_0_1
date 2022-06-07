import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <div>
            <strong>name : </strong> Mohammed
          </div>
        </Col>
        <Col>
          <NavDropdown title='Edit'>
            <LinkContainer to='/admin/edit/home-view'>
              <NavDropdown.Item>home view</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/edit/about-form'>
              <NavDropdown.Item>about</NavDropdown.Item>
            </LinkContainer>{' '}
            <LinkContainer to='/admin/edit/experience'>
              <NavDropdown.Item>experience</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/edit/portfolio'>
              <NavDropdown.Item>portfolio</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/edit/contact'>
              <NavDropdown.Item>contact</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
