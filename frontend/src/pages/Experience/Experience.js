import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGetExperienceDataQuery } from '../../store/apis/ExperienceSlice';
import { useNavigate } from 'react-router';
import {
  deleteOtherExpFromApi,
  deleteProgrammingExpFromApi,
} from '../../admin/views/ExperienceForm/apis/ExperiencesApi';

import './Experience.css';

const Experience = () => {
  const navigate = useNavigate();

  const { data, isLoading, isSuccess, isError, error, refetch } =
    useGetExperienceDataQuery();

  return (
    <Container className='mt-5 text-center experience'>
      <div className='text-center mb-5'>
        <h2>
          <span className='intro-title'>my</span> experience
        </h2>
        <p className='opacity-50'>
          my humble <span className='intro-title'>experience</span>
        </p>
      </div>

      {isLoading ? (
        <p className='text-center'>Loading...</p>
      ) : isSuccess ? (
        data.map((allExperience, index) => (
          <Row key={index}>
            <div
              onClick={() =>
                navigate(`/experience/add/experience/${allExperience._id}`)
              }
              className='add-btn'
            >
              <i className='fa-solid fa-add'></i>
            </div>
            <h2 className='text-start my-2 bg-dark p-2 rounded'>
              {allExperience.programming.programmingTitle}
            </h2>
            {allExperience.programming.experience.length ? (
              allExperience.programming.experience.map(
                (programmingExp, index) => (
                  <Col md={4} key={index} className='programming-exp mb-3'>
                    <Row className='flex-row-reverse'>
                      <div
                        className='mini-edit-btn col-6'
                        onClick={() =>
                          navigate(
                            `/experience/edit/${allExperience._id}/programming/${programmingExp._id}`
                          )
                        }
                      >
                        {' '}
                        <i className='fa-solid fa-edit'></i>
                      </div>
                      <div
                        className='mini-delete-btn col-6'
                        onClick={() => {
                          deleteProgrammingExpFromApi(
                            allExperience._id,
                            programmingExp._id
                          );
                          refetch();
                        }}
                      >
                        {' '}
                        <i className='fa-solid fa-trash'></i>
                      </div>
                    </Row>
                    <div className='bg-dark card'>
                      <div className='img-container'>
                        <img
                          src={programmingExp.image}
                          alt={programmingExp.title}
                          className='mb-5'
                        />
                      </div>
                      <div className='text'>
                        <h5 className='text-info'>{programmingExp.title}</h5>{' '}
                        <p>{programmingExp.experience}</p>
                      </div>
                    </div>
                  </Col>
                )
              )
            ) : (
              <p className='text-center text-muted'>
                no programming experience data
              </p>
            )}
            <h2 className='text-start my-2 bg-dark p-2 rounded'>
              {allExperience.other.otherTitle}
            </h2>
            {allExperience.other.experience.length ? (
              allExperience.other.experience.map((otherExp, index) => (
                <Col md={4} key={index} className='programming-exp mb-3'>
                  <Row className='flex-row-reverse'>
                    <div
                      className='mini-edit-btn col-6'
                      onClick={() =>
                        navigate(
                          `/experience/edit/${allExperience._id}/other/${otherExp._id}`
                        )
                      }
                    >
                      {' '}
                      <i className='fa-solid fa-edit'></i>
                    </div>
                    <div
                      className='mini-delete-btn col-6'
                      onClick={() => {
                        deleteOtherExpFromApi(allExperience._id, otherExp._id);
                        refetch();
                      }}
                    >
                      {' '}
                      <i className='fa-solid fa-trash'></i>
                    </div>
                  </Row>
                  <div className='bg-dark card'>
                    <div className='img-container'>
                      <img
                        src={otherExp.image}
                        alt={otherExp.title}
                        className='mb-5'
                      />
                    </div>
                    <div className='text'>
                      <h5 className='text-info'>{otherExp.title}</h5>
                      <p>{otherExp.experience}</p>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <p className='text-center text-muted'>no other experience data</p>
            )}
          </Row>
        ))
      ) : (
        <p className='text-danger'>{error.message}</p>
      )}
    </Container>
  );
};

export default Experience;
