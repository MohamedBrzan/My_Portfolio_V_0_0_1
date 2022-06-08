import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import './AddPortfolioProjectForm.css';
import {
  addBackendProjectToApi,
  addFrontendProjectToApi,
  addFullStackProjectToApi,
  updateFrontendProjectInDatabase,
} from './apis/PortfolioApi';
import { useNavigate, useParams } from 'react-router';
import { useGetPortfolioDataQuery } from '../../../store/apis/PortfolioSlice';
import axios from 'axios';

const EditFrontendProjectForm = () => {
  const [loading, setLoading] = useState(false);

  const { refetch } = useGetPortfolioDataQuery();

  const { id, projectId } = useParams();

  const navigate = useNavigate();

  const [frontendProImage, setFrontendProImage] = useState('');
  const [frontendProTitle, setFrontendProTitle] = useState('');
  const [frontendProDescription, setFrontendProDescription] = useState('');
  const [frontendProLink, setFrontendProLink] = useState('');

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

  useEffect(() => {
    const fetchProjectData = async () => {
      const { data } = await axios({
        method: 'GET',
        url: `http://localhost:5000/api/v1/portfolio/${id}/frontend/${projectId}`,
      });
      setFrontendProImage(data.image);
      setFrontendProTitle(data.title);
      setFrontendProDescription(data.description);
      setFrontendProLink(data.link);
    };
    fetchProjectData();
  }, [id, projectId]);

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
              setLoading(true);
              if (frontendProImage === '') {
                setLoading(false);
                alert('Please upload an image');
                return;
              }
              updateFrontendProjectInDatabase(
                id,
                projectId,
                frontendProImage,
                frontendProTitle,
                frontendProDescription,
                frontendProLink
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
    </Container>
  );
};

export default EditFrontendProjectForm;
