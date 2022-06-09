import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/api/v1/user',
        data: { email, password },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container className='my-5'>
      {' '}
      <Form
        onSubmit={handleLogin}
        style={{
          maxWidth: '600px',
          margin: 'auto',
        }}
      >
        <Form.Control
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='bg-dark text-light text-lowercase border-0 mb-3'
          placeholder='E-mail'
        />
        <Form.Control
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='bg-dark text-light text-lowercase border-0 mb-3'
          placeholder='password'
        />
        <Button type='submit' variant='info' className='mb-5'>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
