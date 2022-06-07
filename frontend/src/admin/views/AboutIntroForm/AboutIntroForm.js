import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetAboutByIdQuery } from '../../../store/apis/AboutSlice';
import { UpdateAbout } from '../apis/AboutApi';
import './AboutIntroForm.css';

const AboutIntroForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const aboutId = id;

  const {
    data: aboutDetails,
    isFetching,
    isSuccess,
    error,
  } = useGetAboutByIdQuery(id);

  // const aboutDetails = useSelector((state) => state.AboutReducer);

  const [loading, setLoading] = useState(false);
  const [firstPart, setFirstPart] = useState('');
  const [coloredPart, setColoredPart] = useState('');
  const [lastPart, setLastPart] = useState('');
  const [description, setDescription] = useState('');
  const [introImage, setIntroImage] = useState('');
  const [text, setText] = useState('');
  const [variant, setVariant] = useState('');

  const uploadIntroImage = () => {
    const file = document.getElementById('intro-image').files[0];

    if (/\.(png|jpe?g|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        let image = new Image();
        image.src = reader.result;

        image.onload = () => {
          setIntroImage(reader.result);
        };
      });
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setFirstPart(aboutDetails.title.firstPart);
      setColoredPart(aboutDetails.title.coloredPart);
      setLastPart(aboutDetails.title.lastPart);
      setDescription(aboutDetails.description);
      setIntroImage(aboutDetails.image);
      setText(aboutDetails.button.text);
      setVariant(aboutDetails.button.variant);
    }
  }, [
    aboutDetails?.button.text,
    aboutDetails?.button.variant,
    aboutDetails?.description,
    aboutDetails?.image,
    aboutDetails?.title.coloredPart,
    aboutDetails?.title.firstPart,
    aboutDetails?.title.lastPart,
    isSuccess,
  ]);

  return (
    <Container className='about-intro-form'>
      <h1>about intro form</h1>
      {isFetching ? (
        <p className='text-info'>Please Waiting .....</p>
      ) : isSuccess ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            UpdateAbout(
              setLoading,
              aboutId,
              firstPart,
              coloredPart,
              lastPart,
              description,
              introImage,
              text,
              variant,
              navigate
            );
          }}
        >
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>first part</strong>
            </Form.Label>
            <Form.Control
              type='text'
              value={firstPart}
              placeholder='First Part'
              disabled={loading}
              onChange={(e) => setFirstPart(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>colored part</strong>
            </Form.Label>
            <Form.Control
              type='text'
              value={coloredPart}
              placeholder='Colored Part'
              disabled={loading}
              onChange={(e) => setColoredPart(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>last part</strong>
            </Form.Label>
            <Form.Control
              type='text'
              value={lastPart}
              placeholder='Last Part'
              disabled={loading}
              onChange={(e) => setLastPart(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>description</strong>
            </Form.Label>
            <Form.Control
              as={'textarea'}
              rows={8}
              value={description}
              placeholder='Description'
              disabled={loading}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>button</strong>
            </Form.Label>
            <Form.Control
              className='mb-3'
              type='text'
              value={text}
              placeholder='Button Text'
              disabled={loading}
              onChange={(e) => setText(e.target.value)}
              required
            />{' '}
            <Form.Control
              type='variant'
              value={variant}
              placeholder='Button variant'
              disabled={loading}
              onChange={(e) => setVariant(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>image</strong>
            </Form.Label>
            <Form.Control
              type='file'
              id='intro-image'
              onChange={uploadIntroImage}
              disabled={loading}
            />
          </Form.Group>
          {introImage && (
            <div className='image-container'>
              <img src={introImage} alt='introImage' />
              <Button
                variant='danger'
                onClick={() => setIntroImage('')}
                className='delete-btn my-3'
              >
                <i className='fa-solid fa-trash-can'></i>
              </Button>
            </div>
          )}
          <Button
            className='my-3'
            type='submit'
            variant='secondary'
            disabled={loading}
          >
            Upload
          </Button>
        </Form>
      ) : (
        <p className='text-danger'>{error}</p>
      )}
    </Container>
  );
};

export default AboutIntroForm;
