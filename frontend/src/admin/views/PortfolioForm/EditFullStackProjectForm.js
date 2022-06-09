import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import './AddPortfolioProjectForm.css';
import { updateFullStackProjectInDatabase } from './apis/PortfolioApi';
import { useNavigate, useParams } from 'react-router';
import { useGetPortfolioDataQuery } from '../../../store/apis/PortfolioSlice';
import axios from 'axios';

const EditFullStackProjectForm = () => {
  const [loading, setLoading] = useState(false);

  const { refetch } = useGetPortfolioDataQuery();

  const { id, projectId } = useParams();

  const navigate = useNavigate();

  const [fullStackProImage, setFullStackProImage] = useState('');
  const [fullStackProTitle, setFullStackProTitle] = useState('');
  const [fullStackProDescription, setFullStackProDescription] = useState('');
  const [fullStackProLink, setFullStackProLink] = useState('');

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

  useEffect(() => {
    const fetchProjectData = async () => {
      const { data } = await axios({
        method: 'GET',
        url: `/api/v1/portfolio/${id}/fullStack/${projectId}`,
      });
      setFullStackProImage(data.image);
      setFullStackProTitle(data.title);
      setFullStackProDescription(data.description);
      setFullStackProLink(data.link);
    };
    fetchProjectData();
  }, [id, projectId]);

  return (
    <Container className='experience-form'>
      <h1>portfolio form</h1>
      <Card className='bg-dark'>
        <Card.Title className='bg-secondary p-3 rounded'>
          fullStack project
        </Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              if (fullStackProImage === '') {
                setLoading(false);
                alert('Please upload an image');
                return;
              }
              updateFullStackProjectInDatabase(
                id,
                projectId,
                fullStackProImage,
                fullStackProTitle,
                fullStackProDescription,
                fullStackProLink
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

export default EditFullStackProjectForm;
