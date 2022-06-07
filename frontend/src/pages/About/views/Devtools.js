import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Devtools = ({ about }) => {
  return (
    <div>
      {' '}
      <h2 className='text-center my-5'>
        developing <span className='intro-title'>tools</span>
      </h2>
      <Row className='developing-tools'>
        {about.devtools.length ? (
          about.devtools.map((technology, index) => {
            return (
              <Col xs={6} key={index} md={3}>
                <div className='developing-tool mb-3'>
                  <p>{technology.name}</p>
                  <img
                    src={technology.image}
                    alt={technology.name}
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
