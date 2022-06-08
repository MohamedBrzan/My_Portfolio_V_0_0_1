import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useGetExperienceDataQuery } from '../../../store/apis/ExperienceSlice';
import { updateOtherExpInDatabase } from './apis/ExperiencesApi';
import './ExperienceForm.css';
import axios from 'axios';

const EditOtherExpForm = () => {
  const [loading, setLoading] = useState(false);

  const { id, experienceId } = useParams();

  const navigate = useNavigate();

  const { refetch } = useGetExperienceDataQuery();

  const [otherExpImage, setOtherExpImage] = useState('');
  const [otherExpTitle, setOtherExpTitle] = useState('');
  const [otherExperience, setOtherExperience] = useState('');

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

  useEffect(() => {
    const fetchingExperience = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `http://localhost:5000/api/v1/experience/${id}/other/${experienceId}`,
        });
        setOtherExpImage(data.image);
        setOtherExpTitle(data.title);
        setOtherExperience(data.experience);
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
          other experience
        </Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);

              if (otherExpImage === '') {
                setLoading(false);
                alert('Please upload an image');
                return;
              }

              updateOtherExpInDatabase(
                id,
                experienceId,
                otherExpImage,
                otherExpTitle,
                otherExperience
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
                value={otherExpTitle}
                placeholder='Experience Title'
                disabled={loading}
                onChange={(e) => setOtherExpTitle(e.target.value)}
                required
              />
            </Form.Group>{' '}
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

export default EditOtherExpForm;
