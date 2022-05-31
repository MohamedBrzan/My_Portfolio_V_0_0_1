import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Row className='text-center bg-dark m-0'>
      <Col>
        &copy; Copyright 2022, Inspired By
        <Link to='/' className='ms-3'>
          <small>Mohamed Mahmoud</small>
        </Link>
      </Col>
    </Row>
  );
};

export default Footer;
