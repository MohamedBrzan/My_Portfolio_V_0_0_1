import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './ExperienceForm.css';
import {
  addOtherExpToApi,
  addProgrammingExpToApi,
} from './apis/ExperiencesApi';
import { useNavigate, useParams } from 'react-router';
import { useGetExperienceDataQuery } from '../../../store/apis/ExperienceSlice';

const AddExperienceForm = () => {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const { refetch } = useGetExperienceDataQuery();

  const [programmingExpImage, setProgrammingExpImage] = useState('');
  const [programmingExpTitle, setProgrammingExpTitle] = useState('');
  const [programmingExperience, setProgrammingExperience] = useState('');

  const [otherExpImage, setOtherExpImage] = useState('');
  const [otherExpTitle, setOtherExpTitle] = useState('');
  const [otherExperience, setOtherExperience] = useState('');

  const uploadProgrammingExpImage = () => {
    const programmingImage = document.getElementById('programmingExpImage')
      .files[0];

    if (/\.(jpe?g|png|gif)$/.test(programmingImage.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        var loadedImage = new Image();
        loadedImage.src = reader.result;
        loadedImage.onload = () => {
          setProgrammingExpImage(reader.result);
        };
      });

      reader.readAsDataURL(programmingImage);
    }
  };

  const uploadOtherExpImage = () => {
    const otherImage = document.getElementById('otherExpImage').files[0];

    if (/\.(jpe?g|png|gif)$/.test(otherImage.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        var loadedImage = new Image();
        loadedImage.src = reader.result;
        loadedImage.onload = () => {
          setOtherExpImage(reader.result);
        };
      });

      reader.readAsDataURL(otherImage);
    }
  };
  return (
    <Container className='experience-form'>
      <h1>experience form</h1>
      <Card className='bg-dark'>
        <Card.Title className='bg-secondary p-3 rounded'>
          programming experience
        </Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              addProgrammingExpToApi(
                id,
                programmingExpImage,
                programmingExpTitle,
                programmingExperience
              );
              refetch();
              setLoading(false);
              navigate('/experience');
            }}
          >
            <Form.Group className='mb-3'>
              <Form.Label>title</Form.Label>
              <Form.Control
                type='text'
                maxLength='25'
                value={programmingExpTitle}
                placeholder='Experience Title'
                disabled={loading}
                onChange={(e) => setProgrammingExpTitle(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>experience</Form.Label>
              <Form.Control
                as={'textarea'}
                rows='8'
                maxLength={120}
                value={programmingExperience}
                placeholder='Experience'
                disabled={loading}
                onChange={(e) => setProgrammingExperience(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>image</Form.Label>
              <Form.Control
                type='file'
                id='programmingExpImage'
                onChange={uploadProgrammingExpImage}
                disabled={loading}
                required
              />
            </Form.Group>
            <div className='my-3 image-container'>
              {programmingExpImage && (
                <>
                  <img src={programmingExpImage} alt='Source' />
                  <Button
                    variant='danger'
                    onClick={() => setProgrammingExpImage('')}
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
          </Form>
        </Card.Body>
      </Card>
      <hr />
      <Card className='bg-dark'>
        <Card.Title className='bg-secondary p-3 rounded'>
          other experience
        </Card.Title>
        <Card.Body>
          {' '}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              addOtherExpToApi(
                id,
                otherExpImage,
                otherExpTitle,
                otherExperience
              );
              refetch();
              setLoading(false);
              navigate('/experience');
            }}
          >
            {' '}
            <Form.Group className='mb-3'>
              <Form.Label>title</Form.Label>
              <Form.Control
                type='text'
                maxLength='25'
                value={otherExpTitle}
                placeholder='Experience Title'
                disabled={loading}
                onChange={(e) => setOtherExpTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>experience</Form.Label>
              <Form.Control
                as={'textarea'}
                rows='8'
                maxLength={120}
                value={otherExperience}
                placeholder='Experience'
                disabled={loading}
                onChange={(e) => setOtherExperience(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>image</Form.Label>
              <Form.Control
                type='file'
                id='otherExpImage'
                onChange={uploadOtherExpImage}
                disabled={loading}
                required
              />
            </Form.Group>
            <div className='my-3 image-container'>
              {otherExpImage && (
                <>
                  <img src={otherExpImage} alt='Source' />
                  <Button
                    variant='danger'
                    onClick={() => setOtherExpImage('')}
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
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddExperienceForm;
