import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router';
import { useGetAboutDataQuery } from '../../../store/apis/AboutSlice';
import { deleteFrontendTechFromApi } from '../../../admin/views/apis/TechsApi';

const Techs = ({ about }) => {
  const navigate = useNavigate();
  const { refetch } = useGetAboutDataQuery();

  return (
    <div className='skills'>
      {' '}
      <h2 className='text-center my-5'>
        <span className='intro-title'>my</span> skills
      </h2>
      <Row>
        <Col md={6} className='frontend-sec'>
          <h5>frontend skills</h5>
          <div
            onClick={() => navigate(`/about/add/techs/${about._id}`)}
            className='add-btn'
          >
            <i className='fa-solid fa-add'></i>
          </div>
          <div>
            {about.skills.frontend.techs.length ? (
              about.skills.frontend.techs.map((tech, index) => (
                <div key={index}>
                  <Row className='frontend-sec'>
                    <Row className='flex-row-reverse'>
                      <div
                        className='mini-edit-btn col-1'
                        onClick={() =>
                          navigate(
                            `/about/edit/frontend/techs/${about._id}/${tech._id}`
                          )
                        }
                      >
                        {' '}
                        <i className='fa-solid fa-edit'></i>
                      </div>
                      <div
                        className='mini-delete-btn col-1'
                        onClick={() => {
                          deleteFrontendTechFromApi(about._id, tech._id);
                          refetch();
                        }}
                      >
                        {' '}
                        <i className='fa-solid fa-trash'></i>
                      </div>
                    </Row>
                    <Col sm={6}>
                      <b>{tech.frontendTech}</b>
                    </Col>
                    <Col sm={6} className='text-end'>
                      <b>{tech.frontendTechProgress}%</b>
                    </Col>
                  </Row>
                  <ProgressBar
                    animated
                    variant={tech.frontendTechVariant}
                    now={tech.frontendTechProgress}
                    label={`${tech.frontendTechProgress}%`}
                    className='bg-dark mb-3'
                  />
                </div>
              ))
            ) : (
              <p className='text-muted text-center'>no frontend techs data</p>
            )}
          </div>

          <h5>frameworks</h5>
          {about.skills.frontend.frameworks.length ? (
            about.skills.frontend.frameworks.map((framework, index) => {
              return (
                <div key={index}>
                  <Row>
                    <Col sm={6}>
                      <b>{framework.framework}</b>
                    </Col>
                    <Col sm={6} className='text-end'>
                      <b>{framework.progress}%</b>
                    </Col>
                  </Row>
                  <ProgressBar
                    animated
                    variant='success'
                    now={framework.progress}
                    label={`${framework.progress}%`}
                    className='bg-dark mb-3'
                  />
                </div>
              );
            })
          ) : (
            <p className='text-muted text-center'>
              no frontend frameworks data
            </p>
          )}
        </Col>
        <Col md={6}>
          <h5>backend skills</h5>
          <div>
            {about.skills.backend.techs.length ? (
              about.skills.backend.techs.map((tech, index) => (
                <div key={index}>
                  <Row>
                    <Col sm={6}>
                      <b>{tech.backendTech}</b>
                    </Col>
                    <Col sm={6} className='text-end'>
                      <b>{tech.backendTechProgress}%</b>
                    </Col>
                  </Row>
                  <ProgressBar
                    animated
                    variant={tech.backendTechVariant}
                    now={tech.backendTechProgress}
                    label={`${tech.backendTechProgress}%`}
                    className='bg-dark mb-3'
                  />
                </div>
              ))
            ) : (
              <p className='text-muted text-center'>no backend techs data</p>
            )}
          </div>
          <h5>frameworks</h5>
          {about.skills.backend.frameworks.length ? (
            about.skills.backend.frameworks.map((framework, index) => {
              return (
                <div key={index}>
                  <Row>
                    <Col sm={6}>
                      <b>{framework.framework}</b>
                    </Col>
                    <Col sm={6} className='text-end'>
                      <b>{framework.progress}%</b>
                    </Col>
                  </Row>
                  <ProgressBar
                    animated
                    variant='success'
                    now={framework.progress}
                    label={`${framework.progress}%`}
                    className='bg-dark mb-3'
                  />
                </div>
              );
            })
          ) : (
            <p className='text-muted text-center'>no backend frameworks data</p>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Techs;
