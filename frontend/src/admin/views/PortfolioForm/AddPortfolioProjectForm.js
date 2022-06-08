import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './AddPortfolioProjectForm.css';
import {
  addBackendProjectToApi,
  addFrontendProjectToApi,
  addFullStackProjectToApi,
} from './apis/PortfolioApi';
import { useNavigate, useParams } from 'react-router';
import { useGetPortfolioDataQuery } from '../../../store/apis/PortfolioSlice';

const AddPortfolioProjectForm = () => {
  const [loading, setLoading] = useState(false);

  const { refetch } = useGetPortfolioDataQuery();

  const { id } = useParams();

  const navigate = useNavigate();

  const [frontendProImage, setFrontendProImage] = useState('');
  const [frontendProTitle, setFrontendProTitle] = useState('');
  const [frontendProDescription, setFrontendProDescription] = useState('');
  const [frontendProLink, setFrontendProLink] = useState('');

  const [backendProImage, setBackendProImage] = useState('');
  const [backendProTitle, setBackendProTitle] = useState('');
  const [backendProDescription, setBackendProDescription] = useState('');
  const [backendProLink, setBackendProLink] = useState('');

  const [fullStackProImage, setFullStackProImage] = useState('');
  const [fullStackProTitle, setFullStackProTitle] = useState('');
  const [fullStackProDescription, setFullStackProDescription] = useState('');
  const [fullStackProLink, setFullStackProLink] = useState('');

  const uploadFrontendImage = () => {
    const file = document.getElementById('frontend-image').files[0];

    if (/\.(jpe?g|png|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        var loadedImage = new Image();
        loadedImage.src = reader.result;
        loadedImage.onload = () => {
          setFrontendProImage(reader.result);
        };
      });

      reader.readAsDataURL(file);
    }
  };

  const uploadBackendImage = () => {
    const file = document.getElementById('backend-image').files[0];

    if (/\.(jpe?g|png|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        var loadedImage = new Image();
        loadedImage.src = reader.result;
        loadedImage.onload = () => {
          setBackendProImage(reader.result);
        };
      });

      reader.readAsDataURL(file);
    }
  };

  const uploadFullStackImage = () => {
    const file = document.getElementById('fullStack-image').files[0];

    if (/\.(jpe?g|png|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        var loadedImage = new Image();
        loadedImage.src = reader.result;
        loadedImage.onload = () => {
          setFullStackProImage(reader.result);
        };
      });

      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className='experience-form'>
      <h1>portfolio form</h1>
      <Card className='bg-dark'>
        <Card.Title className='bg-secondary p-3 rounded'>
          frontend project
        </Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addFrontendProjectToApi(
                id,
                frontendProImage,
                frontendProTitle,
                frontendProDescription,
                frontendProLink
              );
              refetch();
              navigate('/portfolio');
            }}
          >
            <Form.Group className='mb-3'>
              <Form.Label>title</Form.Label>
              <Form.Control
                type='text'
                value={frontendProTitle}
                placeholder='Title'
                disabled={loading}
                onChange={(e) => setFrontendProTitle(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>description</Form.Label>
              <Form.Control
                as={'textarea'}
                rows='8'
                value={frontendProDescription}
                placeholder='Description'
                disabled={loading}
                onChange={(e) => setFrontendProDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>link</Form.Label>
              <Form.Control
                type='url'
                value={frontendProLink}
                placeholder='Link'
                disabled={loading}
                onChange={(e) => setFrontendProLink(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>image</Form.Label>
              <Form.Control
                type='file'
                id='frontend-image'
                onChange={uploadFrontendImage}
                disabled={loading}
                required
              />
            </Form.Group>
            <div className='my-3 image-container'>
              {frontendProImage && (
                <>
                  <img src={frontendProImage} alt='Source' />
                  <Button
                    variant='danger'
                    onClick={() => setFrontendProImage('')}
                    className='delete-btn'
                  >
                    <i className='fa-solid fa-trash-can'></i>
                  </Button>
                </>
              )}
            </div>
            <Button type='submit' variant='secondary' disabled={loading}>
              Update
            </Button>
          </Form>{' '}
        </Card.Body>
      </Card>
      <hr />
      <Card className='bg-dark'>
        <Card.Title className='bg-secondary p-3 rounded'>
          backend project
        </Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addBackendProjectToApi(
                id,
                backendProImage,
                backendProTitle,
                backendProDescription,
                backendProLink
              );
              refetch();
              navigate('/portfolio');
            }}
          >
            <Form.Group className='mb-3'>
              <Form.Label>title</Form.Label>
              <Form.Control
                type='text'
                value={backendProTitle}
                placeholder='Title'
                disabled={loading}
                onChange={(e) => setBackendProTitle(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>description</Form.Label>
              <Form.Control
                as={'textarea'}
                rows='8'
                value={backendProDescription}
                placeholder='Description'
                disabled={loading}
                onChange={(e) => setBackendProDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>link</Form.Label>
              <Form.Control
                type='url'
                value={backendProLink}
                placeholder='Link'
                disabled={loading}
                onChange={(e) => setBackendProLink(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>image</Form.Label>
              <Form.Control
                type='file'
                id='backend-image'
                onChange={uploadBackendImage}
                disabled={loading}
                required
              />
            </Form.Group>
            <div className='my-3 image-container'>
              {backendProImage && (
                <>
                  <img src={backendProImage} alt='Source' />
                  <Button
                    variant='danger'
                    onClick={() => setBackendProImage('')}
                    className='delete-btn'
                  >
                    <i className='fa-solid fa-trash-can'></i>
                  </Button>
                </>
              )}
            </div>
            <Button type='submit' variant='secondary' disabled={loading}>
              Update
            </Button>
          </Form>{' '}
        </Card.Body>
      </Card>{' '}
      <hr />
      <Card className='bg-dark'>
        <Card.Title className='bg-secondary p-3 rounded'>
          fullStack project
        </Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addFullStackProjectToApi(
                id,
                fullStackProImage,
                fullStackProTitle,
                fullStackProDescription,
                fullStackProLink
              );
              refetch();
              navigate('/portfolio');
            }}
          >
            <Form.Group className='mb-3'>
              <Form.Label>title</Form.Label>
              <Form.Control
                type='text'
                value={fullStackProTitle}
                placeholder='Title'
                disabled={loading}
                onChange={(e) => setFullStackProTitle(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>description</Form.Label>
              <Form.Control
                as={'textarea'}
                rows='8'
                value={fullStackProDescription}
                placeholder='Description'
                disabled={loading}
                onChange={(e) => setFullStackProDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>link</Form.Label>
              <Form.Control
                type='url'
                value={fullStackProLink}
                placeholder='Link'
                disabled={loading}
                onChange={(e) => setFullStackProLink(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>image</Form.Label>
              <Form.Control
                type='file'
                id='fullStack-image'
                onChange={uploadFullStackImage}
                disabled={loading}
                required
              />
            </Form.Group>
            <div className='my-3 image-container'>
              {fullStackProImage && (
                <>
                  <img src={fullStackProImage} alt='Source' />
                  <Button
                    variant='danger'
                    onClick={() => setFullStackProImage('')}
                    className='delete-btn'
                  >
                    <i className='fa-solid fa-trash-can'></i>
                  </Button>
                </>
              )}
            </div>
            <Button type='submit' variant='secondary' disabled={loading}>
              Update
            </Button>
          </Form>{' '}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddPortfolioProjectForm;
