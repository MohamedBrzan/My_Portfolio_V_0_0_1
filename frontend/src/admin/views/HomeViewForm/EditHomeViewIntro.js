import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router';
import { useGetAllHomeViewsQuery } from '../../../store/apis/HomeViewSlice';
import { useEffect, useState } from 'react';
import { updateHomeViewIntroInDatabase } from './apis/HomeViewsApis';
import axios from 'axios';

const EditHomeViewIntro = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { refetch } = useGetAllHomeViewsQuery();

  const [firstPart, setFirstPart] = useState('');
  const [coloredPart, setColoredPart] = useState('');
  const [lastPart, setLastPart] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `/api/v1/${id}`,
        });
        setFirstPart(data.title.firstPart);
        setColoredPart(data.title.coloredPart);
        setLastPart(data.title.lastPart);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container className='my-5 '>
      <Card className='bg-dark p-3'>
        <Card.Title>home view intro</Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              updateHomeViewIntroInDatabase(
                id,
                firstPart,
                coloredPart,
                lastPart
              );
              refetch();
              navigate('/');
            }}
          >
            {' '}
            <Form.Group className='mb-3'>
              <Form.Label>first part</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter First Part Text'
                value={firstPart}
                onChange={(e) => setFirstPart(e.target.value)}
                required
              />
            </Form.Group>{' '}
            <Form.Group className='mb-3'>
              <Form.Label>colored part</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Colored Part Text'
                value={coloredPart}
                onChange={(e) => setColoredPart(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>last part</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Last Part Text'
                value={lastPart}
                onChange={(e) => setLastPart(e.target.value)}
                required
              />
            </Form.Group>
            <Button type='submit' variant='secondary' className='my-3'>
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditHomeViewIntro;
