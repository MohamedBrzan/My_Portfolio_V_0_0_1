import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './PortfolioForm.css';

const PortfolioForm = () => {
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const uploadImage = () => {
    const file = document.querySelector('input[type="file"]').files[0];

    if (/\.(jpe?g|png|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        var loadedImage = new Image();
        loadedImage.src = reader.result;
        loadedImage.onload = () => {
          if (loadedImage.width > 1000 || loadedImage.height > 1000) {
            alert('Image size must be less than 1000x1000');
          } else {
            setImage(reader.result);
          }
        };
      });

      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className='experience-form'>
      <h1>portfolio form</h1>
      <Card className='bg-dark'>
        <Card.Title className='bg-secondary p-3 rounded'>intro</Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className='mb-3'>
              <Form.Label>title</Form.Label>
              <Form.Control
                type='text'
                value={title}
                placeholder='Title'
                disabled={loading}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>description</Form.Label>
              <Form.Control
                as={'textarea'}
                rows='8'
                value={description}
                placeholder='Description'
                disabled={loading}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>link</Form.Label>
              <Form.Control
                type='link'
                value={link}
                placeholder='Link'
                disabled={loading}
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>image</Form.Label>
              <Form.Control
                type='file'
                onChange={uploadImage}
                disabled={loading}
                required
              />
            </Form.Group>
            <div className='my-3 image-container'>
              {image && (
                <>
                  <img src={image} alt='Source' />
                  <Button
                    variant='danger'
                    onClick={() => setImage('')}
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

export default PortfolioForm;
