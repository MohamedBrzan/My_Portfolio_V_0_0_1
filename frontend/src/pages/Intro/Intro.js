import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useGetAllHomeViewsQuery } from '../../store/apis/HomeViewSlice';
import {
  deleteBackendImageFromDatabase,
  deleteFrontendImageFromDatabase,
} from '../../admin/views/HomeViewForm/apis/HomeViewsApis';
import { useContext } from 'react';
import './Intro.css';
import AuthContext from '../../auth/log/IsLogged';

const Intro = () => {
  const { loggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const { data, isLoading, isSuccess, error, refetch } =
    useGetAllHomeViewsQuery();

  // const technologies = [
  //   {
  //     name: 'Html5',
  //     logo: '/images/html5',
  //   },
  //   {
  //     name: 'Css',
  //     logo: '/images/css',
  //   },
  //   {
  //     name: 'Javascript',
  //     logo: '/images/js',
  //   },
  //   {
  //     name: 'Node.js',
  //     logo: '/images/node',
  //   },
  //   {
  //     name: 'Express',
  //     logo: '/images/express',
  //   },
  //   {
  //     name: 'MongoDB',
  //     logo: '/images/mongoDB',
  //   },
  // ];

  return (
    <article className='home'>
      {isLoading ? (
        <div>Loading...</div>
      ) : isSuccess ? (
        data.map((homeView, index) => (
          <div className='intro' key={index}>
            {loggedIn.success === true && (
              <Link to={`${homeView._id}/edit/intro`} className='edit-btn'>
                <i className='fa-solid fa-edit'></i>
              </Link>
            )}
            {/* <small className='small-intro-title'>welcome to my portfolio</small> */}
            <div>
              {' '}
              <small className='small-intro-title'>
                {homeView.title.firstPart}
              </small>
            </div>
            <h1>
              {/* <span className='intro-title'>i'm</span> web developer| */}
              <span className='intro-title'>
                {homeView.title.coloredPart}
              </span>{' '}
              {homeView.title.lastPart}|
            </h1>
            <Row>
              {loggedIn.success === true && (
                <div
                  onClick={() => navigate(`/${homeView._id}/add`)}
                  className='add-btn'
                >
                  <i className='fa-solid fa-add'></i>
                </div>
              )}
              {homeView.frontendImages.map((frontendImage, index) => {
                return (
                  <Col
                    xs={6}
                    md={4}
                    key={index}
                    className='intro-col mb-3'
                    title={frontendImage.title}
                  >
                    <Row className='flex-row-reverse m-auto text-center justify-content-center'>
                      <div
                        className='mini-edit-btn col'
                        onClick={() =>
                          navigate(
                            `/${homeView._id}/edit/frontend/${frontendImage._id}`
                          )
                        }
                      >
                        <i className='fa-solid fa-edit'></i>
                      </div>
                      <div
                        className='mini-delete-btn col'
                        onClick={() => {
                          deleteFrontendImageFromDatabase(
                            homeView._id,
                            frontendImage._id
                          );
                          refetch();
                        }}
                      >
                        <i className='fa-solid fa-trash'></i>
                      </div>
                    </Row>
                    <img
                      src={frontendImage.image}
                      alt={frontendImage.title}
                      className='img-thumbnail'
                    />
                  </Col>
                );
              })}{' '}
              {homeView.backendImages.map((backendImage, index) => {
                return (
                  <Col xs={6} md={4} key={index} className='intro-col mb-3'>
                    <Row className='flex-row-reverse m-auto text-center justify-content-center'>
                      <div
                        className='mini-edit-btn col'
                        onClick={() =>
                          navigate(
                            `/${homeView._id}/edit/backend/${backendImage._id}`
                          )
                        }
                      >
                        <i className='fa-solid fa-edit'></i>
                      </div>
                      <div
                        className='mini-delete-btn col'
                        onClick={() => {
                          deleteBackendImageFromDatabase(
                            homeView._id,
                            backendImage._id
                          );
                        }}
                      >
                        <i className='fa-solid fa-trash'></i>
                      </div>
                    </Row>
                    <img
                      src={backendImage.image}
                      alt={backendImage.title}
                      className='img-thumbnail'
                    />
                  </Col>
                );
              })}
            </Row>{' '}
          </div>
        ))
      ) : (
        <p className='text-danger text-center'>{error.message}</p>
      )}
    </article>
  );
};

export default Intro;
