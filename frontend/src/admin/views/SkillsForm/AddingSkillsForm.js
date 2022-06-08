import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useGetAboutDataQuery } from '../../../store/apis/AboutSlice';
import { useState } from 'react';
import { addBackendTechToApi, addFrontendTechToApi } from '../apis/TechsApi';
import {
  addBackendFrameworkToApi,
  addFrontendFrameworkToApi,
} from '../apis/FrameworksApi';

const AddTechForm = () => {
  const [loading, setLoading] = useState(false);
  const { aboutId } = useParams();

  const navigate = useNavigate();

  const { refetch } = useGetAboutDataQuery();

  const [frontendTech, setFrontendTech] = useState('');
  const [frontendTechProgress, setFrontendTechProgress] = useState('50');
  const [frontendTechVariant, setFrontendTechVariant] = useState('primary');

  const [backendTech, setBackendTech] = useState('');
  const [backendTechProgress, setBackendTechProgress] = useState('50');
  const [backendTechVariant, setBackendTechVariant] = useState('primary');

  const [frontendFramework, setFrontendFramework] = useState('');
  const [frontendFrameworkProgress, setFrontendFrameworkProgress] =
    useState('50');
  const [frontendFrameworkVariant, setFrontendFrameworkVariant] =
    useState('primary');

  const [backendFramework, setBackendFramework] = useState('');
  const [backendFrameworkProgress, setBackendFrameworkProgress] =
    useState('50');
  const [backendFrameworkVariant, setBackendFrameworkVariant] =
    useState('primary');

  return (
    <Container className='my-5'>
      <Card className='p-3 bg-dark'>
        {' '}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addFrontendTechToApi(
              setLoading,
              aboutId,
              frontendTech,
              frontendTechProgress,
              frontendTechVariant
            );
            refetch();
            navigate('/about');
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
              value={frontendTech}
              placeholder='Enter Skill Name'
              disabled={loading}
              onChange={(e) => setFrontendTech(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>tech value </strong>
            </Form.Label>
            <Form.Select
              type='number'
              value={frontendTechProgress}
              placeholder='Frontend Tech Value Number'
              disabled={loading}
              onChange={(e) => setFrontendTechProgress(e.target.value)}
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
              value={frontendTechVariant}
              disabled={loading}
              onChange={(e) => setFrontendTechVariant(e.target.value)}
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
            variant='secondary'
            disabled={loading}
          >
            Upload
          </Button>
        </Form>
      </Card>{' '}
      <hr />
      <Card className='p-3 bg-dark'>
        {' '}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addBackendTechToApi(
              setLoading,
              aboutId,
              backendTech,
              backendTechProgress,
              backendTechVariant
            );
            refetch();
            navigate('/about');
          }}
        >
          <Card.Title className='mb-3 bg-warning p-3 rounded'>
            <strong>backend techs</strong>
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
            variant='secondary'
            disabled={loading}
          >
            Upload
          </Button>
        </Form>
      </Card>
      <hr />
      <Card className='p-3 bg-dark'>
        {' '}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addFrontendFrameworkToApi(
              setLoading,
              aboutId,
              frontendFramework,
              frontendFrameworkProgress,
              frontendFrameworkVariant
            );
            refetch();
            navigate('/about');
          }}
        >
          <Card.Title className='mb-3 bg-info text-dark p-3 rounded'>
            <strong>frontend frameworks</strong>
          </Card.Title>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>Framework name </strong>
            </Form.Label>
            <Form.Control
              type='text'
              value={frontendFramework}
              placeholder='Enter Skill Name'
              disabled={loading}
              onChange={(e) => setFrontendFramework(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>framework value </strong>
            </Form.Label>
            <Form.Select
              type='number'
              value={frontendFrameworkProgress}
              placeholder='Frontend Framework Value Number'
              disabled={loading}
              onChange={(e) => setFrontendFrameworkProgress(e.target.value)}
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
              <strong>framework variant</strong>
            </Form.Label>
            <Form.Select
              value={frontendFrameworkVariant}
              disabled={loading}
              onChange={(e) => setFrontendFrameworkVariant(e.target.value)}
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
            variant='secondary'
            disabled={loading}
          >
            Upload
          </Button>
        </Form>
      </Card>{' '}
      <hr />
      <Card className='p-3 bg-dark'>
        {' '}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addBackendFrameworkToApi(
              setLoading,
              aboutId,
              backendFramework,
              backendFrameworkProgress,
              backendFrameworkVariant
            );
            refetch();
            navigate('/about');
          }}
        >
          <Card.Title className='mb-3 bg-info text-dark p-3 rounded'>
            <strong>backend frameworks</strong>
          </Card.Title>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>framework name </strong>
            </Form.Label>
            <Form.Control
              type='text'
              value={backendFramework}
              placeholder='Enter Skill Name'
              disabled={loading}
              onChange={(e) => setBackendFramework(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              <strong>framework value </strong>
            </Form.Label>
            <Form.Select
              type='number'
              value={backendFrameworkProgress}
              placeholder='Frontend Framework Value Number'
              disabled={loading}
              onChange={(e) => setBackendFrameworkProgress(e.target.value)}
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
              <strong>framework variant</strong>
            </Form.Label>
            <Form.Select
              value={backendFrameworkVariant}
              disabled={loading}
              onChange={(e) => setBackendFrameworkVariant(e.target.value)}
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
            variant='secondary'
            disabled={loading}
          >
            Upload
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddTechForm;
