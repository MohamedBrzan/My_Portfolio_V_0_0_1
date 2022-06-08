import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import './Contact.css';
import { useGetContactDataQuery } from '../../store/apis/ContactSlice';
import { useState } from 'react';
import { createMessage } from '../../admin/views/ContactForm/apis/ContactApi';

const Contact = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetContactDataQuery();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((item, index) => (
          <Row key={index}>
            <Col md={6}>
              <h5 className='mb-3'>message me</h5>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoading(true);
                  createMessage(item._id, name, email, subject, message);
                  setLoading(false);
                  navigate('/');
                }}
              >
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='bg-dark text-light border-0 mb-3'
                  placeholder='Name'
                />
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='bg-dark text-light border-0 mb-3'
                  type='email'
                  placeholder='E-mail'
                />
                <Form.Control
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className='bg-dark text-light border-0 mb-3'
                  placeholder='Subject'
                />
                <Form.Control
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
        ))
      )}
    </Container>
  );
};

export default Contact;
