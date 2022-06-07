import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Experience.css';
import { useGetExperienceDataQuery } from '../../store/apis/ExperienceSlice';

const Experience = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetExperienceDataQuery();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = <div>Data...</div>;
    console.log(data);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <Container className='mt-5 text-center experience'>
      {content}
      {/* <div className='text-center mb-5'>
        <h2>
          <span className='intro-title'>my</span> experience
        </h2>
        <p className='opacity-50'>
          my humble <span className='intro-title'>experience</span>
        </p>
      </div>
      <Row>
        <Col md={4}>
          <div className='bg-dark card'>
            <div className='img-container'>
              {' '}
              <img src='/images/react.png' alt='Portfolio' className='mb-5' />
            </div>
            <div className='text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur illum doloribus error quibusdam veritatis earum, nemo
              eum accusamus fugit numquam quisquam eveniet vero deserunt sit eos
              aliquid laudantium eligendi natus.
            </div>
          </div>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Experience;
