import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addIntroToApi } from '../apis/AboutApi';
import { addServiceToApi } from '../apis/ServicesApi';
import { addFrontendTechToApi, addBackendTechToApi } from '../apis/TechsApi';
import { addDevtoolToApi } from '../apis/DevtoolsApi';
import { useState } from 'react';
import './AboutForms.css';

const AboutForms = () => {
  const [loading, setLoading] = useState(false);

  const [firstPart, setFirstPart] = useState('');
  const [coloredPart, setColoredPart] = useState('');
  const [lastPart, setLastPart] = useState('');
  const [description, setDescription] = useState('');
  const [introImage, setIntroImage] = useState('');
  const [text, setText] = useState('');
  const [variant, setVariant] = useState('');

  const [icon, setIcon] = useState('');
  const [service, setService] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');

  const [frontendTechName, setFrontendTechName] = useState('');
  const [frontendTechValue, setFrontendTechValue] = useState('');

  const [backendTechName, setBackendTechName] = useState('');
  const [backendTechValue, setBackendTechValue] = useState('');

  const [tool, setTool] = useState('');
  const [devToolImage, setDevToolImage] = useState('');

  const uploadsIntroImage = () => {
    const file = document.getElementById('intro-image').files[0];

    if (/\.(png|jpe?g|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        let image = new Image();
        image.src = reader.result;
        image.onload = () => {
          if (image.width > 1000 || image.height > 1000) {
            alert('Image size is too big');
          } else {
            setIntroImage(reader.result);
          }
        };
      });
      reader.readAsDataURL(file);
    }
  };

  const uploadDevToolImage = () => {
    const file = document.getElementById('devtool-image').files[0];

    if (/\.(png|jpe?g|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        let image = new Image();
        image.src = reader.result;
        image.onload = () => {
          if (image.width > 1000 || image.height > 1000) {
            alert('Image size is too big');
          } else {
            setDevToolImage(reader.result);
          }
        };
      });
      reader.readAsDataURL(file);
    }
  };

  const deleteIntroImage = () => {
    return setIntroImage();
  };

  const deleteDevToolImage = () => {
    return setDevToolImage();
  };

  return (
    <Container className='about-form'>
      <h1 className='my-3'>
        <strong>about forms</strong>
      </h1>
      <Card className='bg-dark'>
        <Card.Body>
          <Card.Title className='mb-3 bg-secondary p-3 rounded text-center'>
            <strong>introduction</strong>
          </Card.Title>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addIntroToApi(
                setLoading,
                firstPart,
                coloredPart,
                lastPart,
                description,
                introImage
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
                onChange={uploadsIntroImage}
                disabled={loading}
                required
              />
            </Form.Group>
            {introImage && (
              <div className='image-container'>
                <img src={introImage} alt='introImage' />
                <Button
                  variant='danger'
                  onClick={() => deleteIntroImage()}
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
        </Card.Body>
      </Card>
      <hr />
      <Card className='bg-dark'>
        <Card.Body>
          <Card.Title className='mb-3 bg-secondary p-3 rounded text-center'>
            <strong>services</strong>
          </Card.Title>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addServiceToApi(setLoading, icon, service, serviceDesc);
            }}
          >
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>icon</strong>
              </Form.Label>
              <Form.Control
                type='text'
                className='text-lowercase'
                value={icon}
                placeholder='icon className'
                disabled={loading}
                onChange={(e) => setIcon(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>service</strong>
              </Form.Label>
              <Form.Control
                type='text'
                value={service}
                placeholder='Service Title'
                disabled={loading}
                onChange={(e) => setService(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>service description</strong>
              </Form.Label>
              <Form.Control
                as={'textarea'}
                rows={8}
                value={serviceDesc}
                placeholder='service Description'
                disabled={loading}
                onChange={(e) => setServiceDesc(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              className='my-3'
              type='submit'
              variant='secondary'
              disabled={loading}
            >
              Upload
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <hr />
      <Card className='bg-dark'>
        <Card.Body>
          <Card.Title className='mb-3 bg-secondary p-3 rounded text-center'>
            <strong>skills </strong>
          </Card.Title>
          <Form
            className='text-lowercase'
            onSubmit={(e) => {
              e.preventDefault();
              addFrontendTechToApi({
                setLoading,
                tech: frontendTechName,
                progress: frontendTechValue,
              });
            }}
          >
            <Card.Title className='mb-3 bg-warning p-3 rounded'>
              <strong>frontend skill</strong>
            </Card.Title>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>skill name </strong>
              </Form.Label>
              <Form.Control
                type='text'
                value={frontendTechName}
                placeholder='Enter Skill Name'
                disabled={loading}
                onChange={(e) => setFrontendTechName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>skill value </strong>
              </Form.Label>
              <Form.Control
                type='number'
                value={frontendTechValue}
                placeholder='Description'
                disabled={loading}
                onChange={(e) => setFrontendTechValue(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              className='my-3'
              type='submit'
              variant='secondary'
              disabled={loading}
            >
              Upload
            </Button>
          </Form>
          <hr />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addBackendTechToApi({
                setLoading,
                tech: backendTechName,
                progress: backendTechValue,
              });
            }}
          >
            <Card.Title className='mb-3 bg-warning p-3 rounded'>
              <strong>backend skill</strong>
            </Card.Title>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>skill name </strong>
              </Form.Label>
              <Form.Control
                type='text'
                value={backendTechName}
                placeholder='Enter Skill Name'
                disabled={loading}
                onChange={(e) => setBackendTechName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>skill value </strong>
              </Form.Label>
              <Form.Control
                type='number'
                value={backendTechValue}
                placeholder='Description'
                disabled={loading}
                onChange={(e) => setBackendTechValue(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              className='my-3'
              type='submit'
              variant='secondary'
              disabled={loading}
            >
              Upload
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <hr />
      <Card className='bg-dark'>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addDevtoolToApi({
                setLoading,
                tool,
                image: devToolImage,
              });
            }}
          >
            <Card.Title className='mb-3 bg-secondary p-3 rounded'>
              <strong>devTools</strong>
            </Card.Title>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>tool name</strong>
              </Form.Label>
              <Form.Control
                type='text'
                value={tool}
                placeholder='Enter Tool Name'
                disabled={loading}
                onChange={(e) => setTool(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <strong>devTool Image</strong>
              </Form.Label>
              <Form.Control
                type='file'
                id='devtool-image'
                onChange={uploadDevToolImage}
                disabled={loading}
                required
              />
            </Form.Group>
            {devToolImage && (
              <div className='image-container'>
                <img src={devToolImage} alt='devToolImage' />
                <Button
                  variant='danger'
                  onClick={() => deleteDevToolImage()}
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
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutForms;
