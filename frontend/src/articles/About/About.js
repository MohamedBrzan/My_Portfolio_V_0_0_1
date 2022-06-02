import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './About.css';

const About = () => {
  const aboutMe = [
    {
      description:
        'Within More Than Year Of Experience As A Professional Web Developer , I Have Acquired The Skills And Knowledge Necessary To Make Your Project A Success. I Enjoy Every Step While Working',
      src: '/image/about.jpg',
      button: {
        text: 'Download CV',
        variant: 'secondary',
      },
    },
  ];

  const services = [
    {
      title: 'Web Design',
      description:
        'We Design websites that are responsive, user-friendly, and easy to use. We use the latest technologies to create the best possible websites for our clients.',
      className: 'design-card',
    },
    {
      title: 'Web Development',
      description:
        'We build websites that are responsive, user-friendly, and easy to use. We use the latest technologies to create the best possible websites for our clients.',
      className: 'develop-card',
    },
    {
      title: 'Rest Api',
      description:
        'We build Rest Api that are special for our clients. We use the latest technologies to create the best possible Rest Api for our clients.',
      className: 'api-card',
    },
    {
      title: 'Integration',
      description:
        'We integrate Your Website with the latest technologies to create the best possible integration for our clients.',
      className: 'integrate-card',
    },
  ];

  const frontendTechs = [
    {
      name: 'html',
      value: 90,
    },
    {
      name: 'css',
      value: 90,
    },
    {
      name: 'javascript',
      value: 80,
    },
    {
      name: 'bootstrap',
      value: 90,
    },
    {
      name: 'sass',
      value: 70,
    },
    {
      name: 'Material UI',
      value: 70,
    },
    {
      name: 'redux',
      value: 70,
    },
  ];

  const backendTechs = [
    {
      name: 'node',
      value: 70,
    },
    {
      name: 'mongoDB',
      value: 70,
    },
  ];

  const frontendFrameworks = [
    {
      name: 'react.js',
      value: 90,
    },
  ];

  const backendFrameworks = [
    {
      name: 'express',
      value: 80,
    },
  ];

  const devTools = [
    {
      name: 'visual studio code',
      src: '/images/vs-code',
    },
    {
      name: 'git',
      src: '/images/git',
    },
    {
      name: 'git bash',
      src: '/images/bash',
    },
    {
      name: 'command line',
      src: '/images/command-line',
    },
  ];

  return (
    <Container className='mt-5 about'>
      <div className='text-center mb-5'>
        <h2>
          about <span className='intro-title'>me</span>
        </h2>
        <p className='opacity-50'>
          get to know <span className='intro-title'>me</span>
        </p>
      </div>
      <Row>
        <Col md={6}>
          {aboutMe.map((about, index) => (
            <>
              <h3 className='introduction'>
                i'm creative<span className='intro-title'> web developer </span>{' '}
                based in <br /> egypt, tanta
              </h3>
              <h5 className='introduction'>{about.description}</h5>
              <Button variant={about.button.variant}>
                {about.button.text}
              </Button>
            </>
          ))}
        </Col>
        <Col md={6} className='col-order mb-3'>
          <img
            src='/images/about.jpg'
            alt='Welcome to React'
            className='img-thumbnail'
          />
        </Col>
      </Row>
      <h2 className='text-center my-5'>
        <span className='intro-title'>my</span> services
      </h2>
      <Row>
        {services.map((service) => (
          <Col md={3} key={service.title}>
            <Card className={service.className}>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className='text-center my-5'>
        <span className='intro-title'>my</span> skills
      </h2>
      <Row>
        <Col md={6}>
          <h5>frontend skills</h5>
          {frontendTechs.map((technology, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col sm={6}>
                    <b>{technology.name}</b>
                  </Col>
                  <Col sm={6} className='text-end'>
                    <b>{technology.value}%</b>
                  </Col>
                </Row>
                <ProgressBar
                  animated
                  now={technology.value}
                  label={`${technology.value}%`}
                  className='bg-dark mb-3'
                />
              </div>
            );
          })}
          <h5>frameworks</h5>
          {frontendFrameworks.map((technology, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col sm={6}>
                    <b>{technology.name}</b>
                  </Col>
                  <Col sm={6} className='text-end'>
                    <b>{technology.value}%</b>
                  </Col>
                </Row>
                <ProgressBar
                  animated
                  variant='success'
                  now={technology.value}
                  label={`${technology.value}%`}
                  className='bg-dark mb-3'
                />
              </div>
            );
          })}
        </Col>
        <Col md={6}>
          <h5>backend skills</h5>{' '}
          {backendTechs.map((technology, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col sm={6}>
                    <b>{technology.name}</b>
                  </Col>
                  <Col sm={6} className='text-end'>
                    <b>{technology.value}%</b>
                  </Col>
                </Row>
                <ProgressBar
                  animated
                  now={technology.value}
                  label={`${technology.value}%`}
                  className='bg-dark mb-3'
                />
              </div>
            );
          })}{' '}
          <h5>frameworks</h5>
          {backendFrameworks.map((technology, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col sm={6}>
                    <b>{technology.name}</b>
                  </Col>
                  <Col sm={6} className='text-end'>
                    <b>{technology.value}%</b>
                  </Col>
                </Row>
                <ProgressBar
                  animated
                  variant='success'
                  now={technology.value}
                  label={`${technology.value}%`}
                  className='bg-dark mb-3'
                />
              </div>
            );
          })}
        </Col>
      </Row>{' '}
      <h2 className='text-center my-5'>
        developing <span className='intro-title'>tools</span>
      </h2>{' '}
      <Row className='developing-tools'>
        {devTools.map((technology, index) => {
          return (
            <Col xs={6} key={index} md={3}>
              <div className='developing-tool mb-3'>
                <p>{technology.name}</p>
                <img
                  src={technology.src}
                  alt={technology.name}
                  className='img-thumbnail'
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default About;
