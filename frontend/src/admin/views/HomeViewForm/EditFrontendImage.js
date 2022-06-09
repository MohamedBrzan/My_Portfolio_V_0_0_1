import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router';
import { useGetAllHomeViewsQuery } from '../../../store/apis/HomeViewSlice';
import { useEffect, useState } from 'react';
import { updateFrontendImageInDatabase } from './apis/HomeViewsApis';
import axios from 'axios';

const EditFrontendImage = () => {
  const { id, imageId } = useParams();
  const navigate = useNavigate();

  const { refetch } = useGetAllHomeViewsQuery();

  const [frontendImage, setFrontendImage] = useState('');
  const [frontendTitle, setFrontendTitle] = useState('');

  const uploadFrontendImage = () => {
    const file = document.getElementById('frontend-image').files[0];

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `/api/v1/${id}/frontend/${imageId}`,
        });
        setFrontendImage(data.image);
        setFrontendTitle(data.title);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, imageId]);

  return (
    <Container className='my-5 '>
      <Card className='bg-dark p-3'>
        <Card.Title>frontend image</Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              if (frontendImage === '') {
                alert('Please upload an image');
                return;
              }

              updateFrontendImageInDatabase(
                id,
                imageId,
                frontendImage,
                frontendTitle
              );
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
                id='frontend-image'
                onChange={uploadFrontendImage}
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
    </Container>
  );
};

export default EditFrontendImage;
