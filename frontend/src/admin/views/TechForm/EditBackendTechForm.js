import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useGetAboutDataQuery } from '../../../store/apis/AboutSlice';
import { useState } from 'react';
import { updateBackendTech } from '../apis/TechsApi';

const EditBackendTechForm = () => {
  const [loading, setLoading] = useState(false);
  const { aboutId } = useParams();

  const navigate = useNavigate();

  const { refetch } = useGetAboutDataQuery();

  const [backendTech, setBackendTech] = useState('');
  const [backendTechProgress, setBackendTechProgress] = useState('50');
  const [backendTechVariant, setBackendTechVariant] = useState('primary');

  return (
    <Container className='my-5'>
      <Card className='p-3 bg-dark'>
        {' '}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            updateBackendTech(
              setLoading,
              aboutId,
              backendTech,
              backendTechProgress,
              backendTechVariant
            );
            refetch();
          }}
        >
          <Card.Title className='mb-3 bg-warning p-3 rounded'>
            <strong>frontend techs</strong>
          </Card.Title>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>tech name </strong>
            </Form.Label>
            <Form.Control
              type='text'
              value={backendTech}
              placeholder='Enter Skill Name'
              disabled={loading}
              onChange={(e) => setBackendTech(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>tech value </strong>
            </Form.Label>
            <Form.Select
              type='number'
              value={backendTechProgress}
              placeholder='Frontend Tech Value Number'
              disabled={loading}
              onChange={(e) => setBackendTechProgress(e.target.value)}
              required
            >
              <option value='0'>0 %</option>
              <option value='5'>5 %</option>
              <option value='10'>10 %</option>
              <option value='15'>15 %</option>
              <option value='20'>20 %</option>
              <option value='25'>25 %</option>
              <option value='30'>30 %</option>
              <option value='35'>35 %</option>
              <option value='40'>40 %</option>
              <option value='45'>45 %</option>
              <option value='50'>50 %</option>
              <option value='55'>55 %</option>
              <option value='60'>60 %</option>
              <option value='65'>65 %</option>
              <option value='70'>70 %</option>
              <option value='75'>75 %</option>
              <option value='80'>80 %</option>
              <option value='85'>85 %</option>
              <option value='90'>90 %</option>
              <option value='95'>95 %</option>
              <option value='100'>100 %</option>
            </Form.Select>
          </Form.Group>{' '}
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>tech variant</strong>
            </Form.Label>
            <Form.Select
              value={backendTechVariant}
              disabled={loading}
              onChange={(e) => setBackendTechVariant(e.target.value)}
              required
            >
              <option value='primary'>primary</option>
              <option value='secondary'>secondary</option>
              <option value='warning'>warning</option>
              <option value='info'>info</option>
              <option value='success'>success</option>
              <option value='danger'>danger</option>
            </Form.Select>
          </Form.Group>
          <Button
            className='my-3'
            type='submit'
            variant='warning'
            disabled={loading}
          >
            Update
          </Button>
        </Form>
      </Card>{' '}
    </Container>
  );
};

export default EditBackendTechForm;
