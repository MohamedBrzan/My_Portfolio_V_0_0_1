import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGetPortfolioDataQuery } from '../../store/apis/PortfolioSlice';
import './Portfolio.css';
import { useNavigate } from 'react-router';
import {
  deleteBackendProjectFromDatabase,
  deleteFrontendProjectFromDatabase,
  deleteFullStackProjectFromDatabase,
} from '../../admin/views/PortfolioForm/apis/PortfolioApi';

const Portfolio = () => {
  const navigate = useNavigate();

  const { data, isLoading, isSuccess, isError, error, refetch } =
    useGetPortfolioDataQuery();

  return (
    <Container className='mt-5 text-center portfolio'>
      <div className='text-center mb-5'>
        <h2>
          <span className='intro-title'>my</span> portfolio
        </h2>
        <p className='opacity-50'>
          some of my <span className='intro-title'>work</span>
        </p>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error!</div>
      ) : (
        <Row>
          {data.map((portfolio, index) => (
            <Row key={index}>
              <div
                onClick={() => navigate(`/portfolio/add/${portfolio._id}`)}
                className='add-btn'
              >
                <i className='fa-solid fa-add'></i>
              </div>
              <h2 className='text-start my-2 bg-dark p-2 rounded'>
                {portfolio.frontend.title}
              </h2>
              {portfolio.frontend.projects.length ? (
                portfolio.frontend.projects.map((project, index) => (
                  <Col md={4} key={index} className='project'>
                    <Row className='flex-row-reverse justify-content-center'>
                      <div
                        className='mini-edit-btn col-2'
                        onClick={() =>
                          navigate(
                            `/portfolio/edit/${portfolio._id}/frontend/${project._id}`
                          )
                        }
                      >
                        {' '}
                        <i className='fa-solid fa-edit'></i>
                      </div>
                      <div
                        className='mini-delete-btn col-2'
                        onClick={() => {
                          deleteFrontendProjectFromDatabase(
                            portfolio._id,
                            project._id
                          );
                          refetch();
                        }}
                      >
                        {' '}
                        <i className='fa-solid fa-trash'></i>
                      </div>
                    </Row>
                    <Card className='bg-dark p-2'>
                      <Card.Img
                        src={project.image}
                        alt={project.title}
                        className='img-thumbnail mb-5'
                      />
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Body>
                        <Card.Text>{project.description}</Card.Text>
                        <Button
                          href={project.link}
                          target='_blank'
                          variant='info'
                        >
                          View Project
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p className='text-muted text-enter'>
                  frontend designs coming soon !
                </p>
              )}
              <h2 className='text-start my-2 bg-dark p-2 rounded'>
                {portfolio.backend.title}
              </h2>
              {portfolio.backend.projects.length ? (
                portfolio.backend.projects.map((project, index) => (
                  <Col md={4} key={index} className='project'>
                    <Row className='flex-row-reverse justify-content-center'>
                      <div
                        className='mini-edit-btn col-2'
                        onClick={() =>
                          navigate(
                            `/portfolio/edit/${portfolio._id}/backend/${project._id}`
                          )
                        }
                      >
                        {' '}
                        <i className='fa-solid fa-edit'></i>
                      </div>
                      <div
                        className='mini-delete-btn col-2'
                        onClick={() => {
                          deleteBackendProjectFromDatabase(
                            portfolio._id,
                            project._id
                          );
                          refetch();
                        }}
                      >
                        {' '}
                        <i className='fa-solid fa-trash'></i>
                      </div>
                    </Row>
                    <Card className='bg-dark p-2'>
                      <Card.Img
                        src={project.image}
                        alt={project.title}
                        className='img-thumbnail mb-5'
                      />
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Body>
                        <Card.Text>{project.description}</Card.Text>
                        <Button
                          href={project.link}
                          target='_blank'
                          variant='info'
                        >
                          View Project
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p className='text-muted text-enter'>
                  backend apis coming soon !
                </p>
              )}
              <h2 className='text-start my-2 bg-dark p-2 rounded'>
                {portfolio.fullStack.title}
              </h2>
              {portfolio.fullStack.projects.length ? (
                portfolio.fullStack.projects.map((project, index) => (
                  <Col md={4} key={index} className='project'>
                    <Row className='flex-row-reverse justify-content-center'>
                      <div
                        className='mini-edit-btn col-2'
                        onClick={() =>
                          navigate(
                            `/portfolio/edit/${portfolio._id}/fullStack/${project._id}`
                          )
                        }
                      >
                        {' '}
                        <i className='fa-solid fa-edit'></i>
                      </div>
                      <div
                        className='mini-delete-btn col-2'
                        onClick={() => {
                          deleteFullStackProjectFromDatabase(
                            portfolio._id,
                            project._id
                          );
                          refetch();
                        }}
                      >
                        {' '}
                        <i className='fa-solid fa-trash'></i>
                      </div>
                    </Row>
                    <Card className='bg-dark p-2'>
                      <Card.Img
                        src={project.image}
                        alt={project.title}
                        className='img-thumbnail mb-5'
                      />
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Body>
                        <Card.Text>{project.description}</Card.Text>
                        <Button
                          href={project.link}
                          target='_blank'
                          variant='info'
                        >
                          View Project
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p className='text-muted text-enter'>
                  MERN Stack projects coming soon !
                </p>
              )}
            </Row>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Portfolio;
