import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addDevtoolToApi, updateDevtool } from '../apis/DevtoolsApi';
import { useState } from 'react';
import './EditDevToolForm.css';
import { useGetAboutDataQuery } from '../../../store/apis/AboutSlice';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';

const EditDevToolForm = () => {
  const [loading, setLoading] = useState(false);

  const { aboutId, devtoolId } = useParams();

  const navigate = useNavigate();

  const { refetch } = useGetAboutDataQuery();

  const [tool, setTool] = useState('');
  const [image, setImage] = useState('');

  const uploadDevToolImage = () => {
    const file = document.getElementById('devtool-image').files[0];

    if (/\.(png|jpe?g|gif)$/.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        let image = new Image();
        image.src = reader.result;
        image.onload = () => {
          setImage(reader.result);
        };
      });
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const fetchingDevtoolData = async () => {
      try {
        setLoading(true);
        const { data } = await axios({
          mode: 'no-cors',
          method: 'GET',
          url: `/api/v1/about/${aboutId}/devtool/${devtoolId}`,
        });
        setTool(data.tool);
        setImage(data.image);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchingDevtoolData();
  }, [aboutId, devtoolId]);

  return (
    <Container className='about-form'>
      <h1 className='my-3'>
        <strong>edit devtool form</strong>
      </h1>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          updateDevtool(setLoading, aboutId, devtoolId, tool, image);
          refetch();
          navigate('/about');
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
          />
        </Form.Group>
        {image && (
          <div className='image-container'>
            <img src={image} alt='devToolImage' />
            <Button
              variant='danger'
              onClick={() => setImage('')}
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
    </Container>
  );
};

export default EditDevToolForm;
