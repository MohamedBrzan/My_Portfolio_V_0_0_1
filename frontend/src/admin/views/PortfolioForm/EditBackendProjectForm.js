import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import './AddPortfolioProjectForm.css';
import { updateBackendProjectInDatabase } from './apis/PortfolioApi';
import { useNavigate, useParams } from 'react-router';
import { useGetPortfolioDataQuery } from '../../../store/apis/PortfolioSlice';
import axios from 'axios';

const EditBackendProjectForm = () => {
  const [loading, setLoading] = useState(false);

  const { refetch } = useGetPortfolioDataQuery();

  const { id, projectId } = useParams();

  const navigate = useNavigate();

  const [backendProImage, setBackendProImage] = useState('');
  const [backendProTitle, setBackendProTitle] = useState('');
  const [backendProDescription, setBackendProDescription] = useState('');
  const [backendProLink, setBackendProLink] = useState('');

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

  useEffect(() => {
    const fetchProjectData = async () => {
      const { data } = await axios({
        method: 'GET',
        url: `/api/v1/portfolio/${id}/backend/${projectId}`,
      });
      setBackendProImage(data.image);
      setBackendProTitle(data.title);
      setBackendProDescription(data.description);
      setBackendProLink(data.link);
    };
    fetchProjectData();
  }, [id, projectId]);

  return (
    <Container className='experience-form'>
      <h1>portfolio form</h1>
      <Card className='bg-dark'>
        <Card.Title className='bg-secondary p-3 rounded'>
          backend project
        </Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              if (backendProImage === '') {
                setLoading(false);
                alert('Please upload an image');
                return;
              }
              updateBackendProjectInDatabase(
                id,
                projectId,
                backendProImage,
                backendProTitle,
                backendProDescription,
                backendProLink
              );
              refetch();
              setLoading(false);
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
      </Card>
    </Container>
  );
};

export default EditBackendProjectForm;
