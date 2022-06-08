import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router';
import { deleteDevtoolFromApi } from '../../../admin/views/apis/DevtoolsApi';
import { useGetAboutDataQuery } from '../../../store/apis/AboutSlice';

const Devtools = ({ about }) => {
  const navigate = useNavigate();
  const { refetch } = useGetAboutDataQuery();
  return (
    <div className='devtools'>
      {' '}
      <h2 className='text-center my-5'>
        developing <span className='intro-title'>tools</span>
      </h2>{' '}
      <div
        onClick={() => navigate(`/about/edit/devtool/${about._id}`)}
        className='add-btn'
      >
        <i className='fa-solid fa-add'></i>
      </div>
      <Row className='developing-tools'>
        {about.devtools.length ? (
          about.devtools.map((devtool, index) => {
            return (
              <Col xs={6} key={index} md={3} className='devtool-sec'>
                <Row className='flex-row-reverse justify-content-center'>
                  <div
                    className='mini-edit-btn col-4'
                    onClick={() =>
                      navigate(
                        `/about/edit/devtool/${about._id}/${devtool._id}`
                      )
                    }
                  >
                    {' '}
                    <i className='fa-solid fa-edit'></i>
                  </div>
                  <div
                    className='mini-delete-btn col-4'
                    onClick={() => {
                      deleteDevtoolFromApi(about._id, devtool._id);
                      refetch();
                    }}
                  >
                    {' '}
                    <i className='fa-solid fa-trash'></i>
                  </div>
                </Row>
                <div className='developing-tool mb-3' title={devtool.tool}>
                  <img
                    src={devtool.image}
                    alt={devtool.tool}
                    className='img-thumbnail'
                  />
                </div>
              </Col>
            );
          })
        ) : (
          <p className='text-muted text-center'>no dev tools data</p>
        )}
      </Row>
    </div>
  );
};

export default Devtools;
