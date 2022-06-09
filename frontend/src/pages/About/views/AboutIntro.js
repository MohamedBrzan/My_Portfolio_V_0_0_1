import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../auth/log/IsLogged';

const AboutIntro = ({ about }) => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Row className='top-sec'>
      {loggedIn.success === true && (
        <Link to={`edit/intro/${about._id}`} className='text-end edit-btn'>
          <i className='fa-solid fa-edit'></i>
        </Link>
      )}

      <Col md={6}>
        <>
          <h3 className='introduction'>
            {about.title.firstPart}{' '}
            <span className='intro-title'>{about.title.coloredPart}</span>{' '}
            {about.title.lastPart}
          </h3>
          <h5 className='introduction'>{about.description}</h5>
          {/* <Button variant={about.button.variant}>{about.button.text}</Button> */}
        </>
      </Col>
      <Col md={6} className='col-order mb-3'>
        <img
          src={about.image}
          alt='Welcome to React'
          className='img-thumbnail'
        />
      </Col>
    </Row>
  );
};

export default AboutIntro;
