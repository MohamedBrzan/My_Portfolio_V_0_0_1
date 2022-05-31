import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css';

const Contact = () => {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    } catch (error) {
      console.log(error.message);
    }
  };

  const contactInfo = [
    {
      title: 'name',
      info: 'Mohamed Mahmoud',
      className: 'info-name',
      infoClassName: '',
    },
    {
      title: 'location',
      info: 'Egypt - Tanta',
      className: 'info-location',
      infoClassName: '',
    },
    {
      title: 'email',
      info: 'mohamedbrzan11@gmail.com',
      className: 'info-email text-lowercase',
      infoClassName: 'text-lowercase',
    },
    {
      title: 'phone',
      info: '+20 - 111 377 2369',
      className: 'info-phone',
      infoClassName: '',
    },
  ];

  return (
    <Container className='mt-5 contact'>
      <div className='text-center mb-5'>
        <h2>
          contact <span className='intro-title'>me</span>
        </h2>
        <p className='opacity-50'>
          <span className='intro-title'>get</span> in touch
        </p>
      </div>
      <Row>
        <Col md={6}>
          <h5 className='mb-3'>message me</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              required
              className='bg-dark text-light border-0 mb-3'
              placeholder='Name'
            />
            <Form.Control
              required
              className='bg-dark text-light border-0 mb-3'
              type='email'
              placeholder='E-mail'
            />
            <Form.Control
              required
              className='bg-dark text-light border-0 mb-3'
              placeholder='Subject'
            />
            <Form.Control
              required
              as='textarea'
              rows={8}
              className='bg-dark text-light border-0 mb-3'
              placeholder='Message'
            ></Form.Control>
            <Button type='submit' variant='info' className='mb-5'>
              Sent Message
            </Button>
          </Form>
        </Col>
        <Col md={6} className='contact-info'>
          <h5 className='text-center'>contact info</h5>

          {contactInfo.map((info, index) => (
            <div key={index} className={info.className}>
              <h6 className='text-dark'>{info.title}</h6>
              <p className={info.infoClassName}>{info.info}</p>
            </div>
          ))}

          <div className='overlay'></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
