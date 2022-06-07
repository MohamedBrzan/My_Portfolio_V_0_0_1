import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGetPortfolioDataQuery } from '../../store/apis/PortfolioSlice';
import './Portfolio.css';

const Portfolio = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetPortfolioDataQuery();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = <div>Data...</div>;
    console.log(data)
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <Container className='mt-5 text-center portfolio'>
      {content}
      {/* <div className='text-center mb-5'>
        <h2>
          <span className='intro-title'>my</span> portfolio
        </h2>
        <p className='opacity-50'>
          some of my <span className='intro-title'>work</span>
        </p>
      </div>
      <Row>
        <Col md={6}>
          <img
            src='/images/react.png'
            alt='Portfolio'
            className='img-thumbnail mb-5'
          />
        </Col>
        <Col md={6}>
          <Card className='bg-dark p-2'>
            <Card.Title>app idea</Card.Title>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                aperiam ut numquam voluptatibus officiis voluptatum, minus
                praesentium magnam quae labore aspernatur alias quasi totam
                maiores fugiat magni doloremque ab itaque.
              </Card.Text>
              <Button variant='info'>View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Portfolio;
