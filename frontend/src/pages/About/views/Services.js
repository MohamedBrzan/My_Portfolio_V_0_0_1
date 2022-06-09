import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { deleteServiceFromApi } from '../../../admin/views/apis/ServicesApi';
import { useContext } from 'react';
import AuthContext from '../../../auth/log/IsLogged';

const Services = ({ about, refetch }) => {
  const { loggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className='services'>
      {loggedIn.success === true && (
        <div
          onClick={() => navigate(`/about/add/services/${about._id}`)}
          className='add-btn'
        >
          <i className='fa-solid fa-add'></i>
        </div>
      )}
      <h2 className='text-center my-5'>
        <span className='intro-title'>my</span> services
      </h2>{' '}
      <Row>
        {about.services.length ? (
          about.services.map((service, index) => (
            <Col md={3} key={index} className='top-sec'>
              {loggedIn.success === true && (
                <Row className='flex-row-reverse'>
                  <Link
                    to={`edit/services/${about._id}/${service._id}`}
                    className='col-2 d-block edit-btn'
                  >
                    <i className='fa-solid fa-edit'></i>
                  </Link>
                  <Link
                    to='#'
                    className='col-2 d-block delete-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      deleteServiceFromApi(about._id, service._id);
                      refetch();
                    }}
                  >
                    <i className='fa-solid fa-trash'></i>
                  </Link>
                </Row>
              )}

              <Card>
                <Card.Body>
                  <Card.Title className='service-icon'>
                    <i className={service.icon + ' fs-1'}></i>
                  </Card.Title>
                  <Card.Title className='mt-5'>{service.service}</Card.Title>
                  <Card.Text>{service.serviceDesc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className='text-muted text-center'>no service data</p>
        )}
      </Row>
    </div>
  );
};

export default Services;
