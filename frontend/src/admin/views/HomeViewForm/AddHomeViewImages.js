import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  addBackendImageToDatabase,
  addFrontendImageToDatabase,
} from './apis/HomeViewsApis';
import { useGetAllHomeViewsQuery } from '../../../store/apis/HomeViewSlice';
import './HomeView.css';

const AddHomeViewImages = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { refetch } = useGetAllHomeViewsQuery();

  const [frontendImage, setFrontendImage] = useState('');
  const [frontendTitle, setFrontendTitle] = useState('');

  const [backendImage, setBackendImage] = useState('');
  const [backendTitle, setBackendTitle] = useState('');

  const uploadFrontendImage = () => {
    const file = document.getElementById('frontend-images').files[0];

    if (/\.(jpe?g|png|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        var loadedImage = new Image();
        loadedImage.src = reader.result;
        loadedImage.onload = () => {
          setFrontendImage(reader.result);
        };
      });

      reader.readAsDataURL(file);
    }
  };

  const uploadBackendImage = () => {
    const file = document.getElementById('backend-images').files[0];

    if (/\.(jpe?g|png|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        var loadedImage = new Image();
        loadedImage.src = reader.result;
        loadedImage.onload = () => {
          setBackendImage(reader.result);
        };
      });

      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className='my-5 '>
      <Card className='bg-dark p-3'>
        <Card.Title>frontend images</Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addFrontendImageToDatabase(id, frontendImage, frontendTitle);
              refetch();
              navigate('/');
            }}
          >
            {' '}
            <Form.Group className='mb-3'>
              <Form.Label>title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Title'
                value={frontendTitle}
                onChange={(e) => setFrontendTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>image</Form.Label>
              <Form.Control
                type='file'
                id='frontend-images'
                onChange={uploadFrontendImage}
                required
              />
            </Form.Group>
            <Button type='submit' variant='secondary' className='my-3'>
              Upload
            </Button>
            <Row>
              {frontendImage && (
                <Col md={12} className='image-container mb-3'>
                  <img
                    src={frontendImage}
                    alt='Source'
                    className='img-thumbnail'
                  />
                  <Button
                    variant='danger'
                    onClick={() => setFrontendImage('')}
                    className='delete-btn'
                  >
                    <i className='fa-solid fa-trash-can'></i>
                  </Button>
                </Col>
              )}
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <hr />
      <Card className='bg-dark p-3'>
        <Card.Title>backend image</Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addBackendImageToDatabase(id, backendImage, backendTitle);
              refetch();
              navigate('/');
            }}
          >
            <Form.Group className='mb-3'>
              <Form.Label>title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Title'
                value={backendTitle}
                onChange={(e) => setBackendTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>image</Form.Label>
              <Form.Control
                type='file'
                id='backend-images'
                onChange={uploadBackendImage}
                required
              />
            </Form.Group>
            <Button type='submit' variant='secondary' className='my-3'>
              Upload
            </Button>
            <Row>
              {backendImage && (
                <Col md={12} className='image-container mb-3'>
                  <img
                    src={backendImage}
                    alt='Source'
                    className='img-thumbnail'
                  />
                  <Button
                    variant='danger'
                    onClick={() => setBackendImage('')}
                    className='delete-btn'
                  >
                    <i className='fa-solid fa-trash-can'></i>
                  </Button>
                </Col>
              )}
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddHomeViewImages;
