import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useGetExperienceDataQuery } from '../../../store/apis/ExperienceSlice';
import { updateProgrammingExpInDatabase } from './apis/ExperiencesApi';
import './ExperienceForm.css';
import axios from 'axios';

const EditProgrammingExpForm = () => {
  const [loading, setLoading] = useState(false);

  const { id, experienceId } = useParams();

  const navigate = useNavigate();

  const { refetch } = useGetExperienceDataQuery();

  const [programmingExpImage, setProgrammingExpImage] = useState('');
  const [programmingExpTitle, setProgrammingExpTitle] = useState('');
  const [programmingExperience, setProgrammingExperience] = useState('');

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

  useEffect(() => {
    const fetchingExperience = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `/api/v1/experience/${id}/programming/${experienceId}`,
        });
        setProgrammingExpImage(data.image);
        setProgrammingExpTitle(data.title);
        setProgrammingExperience(data.experience);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchingExperience();
  }, [experienceId, id]);

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

              if (programmingExpImage === '') {
                setLoading(false);
                alert('Please upload an image');
                return;
              }

              updateProgrammingExpInDatabase(
                id,
                experienceId,
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
    </Container>
  );
};

export default EditProgrammingExpForm;
