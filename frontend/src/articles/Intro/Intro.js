import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Intro.css';

const Intro = () => {
  const technologies = [
    {
      name: 'Html5',
      logo: '/images/html5',
    },
    {
      name: 'Css',
      logo: '/images/css',
    },
    {
      name: 'Javascript',
      logo: '/images/js',
    },
    {
      name: 'Node.js',
      logo: '/images/node',
    },
    {
      name: 'Express',
      logo: '/images/express',
    },
    {
      name: 'MongoDB',
      logo: '/images/mongoDB',
    },
  ];

  return (
    <article className='home'>
      <div className='intro'>
        <small className='small-intro-title'>welcome to my portfolio</small>
        <h1>
          <span className='intro-title'>i'm</span> web developer|
        </h1>
        <Row>
          {technologies.map((technology, index) => {
            return (
              <Col
                xs={6}
                md={4}
                key={index}
                title={technology.name}
                className='intro-col mb-3'
              >
                <img
                  src={technology.logo}
                  alt={technology.name}
                  className='img-thumbnail'
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </article>
  );
};

export default Intro;
