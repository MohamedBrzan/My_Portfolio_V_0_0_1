import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './EditContactForm.css';

const EditContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  return (
    <Container className='experience-form'>
      <h1>contact form</h1>
      <Card className='bg-dark'>
        <Card.Title className='bg-secondary p-3 rounded'>intro</Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className='mb-3'>
              <Form.Label>name</Form.Label>
              <Form.Control
                type='text'
                value={name}
                placeholder='Name'
                disabled={loading}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>email</Form.Label>
              <Form.Control
                type='email'
                value={email}
                placeholder='E-mail Address'
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>phone</Form.Label>
              <Form.Control
                type='number'
                value={phone}
                placeholder='Phone Number'
                disabled={loading}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>location</Form.Label>
              <Form.Control
                type='text'
                value={location}
                placeholder='Location Address'
                disabled={loading}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </Form.Group>
            <Button type='submit' variant='secondary' disabled={loading}>
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditContactForm;
