import { useNavigate, useParams } from 'react-router-dom';
import { useGetServiceDetailsQuery } from '../../../store/apis/ServiceSlice';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updateServiceInDatabase } from '../apis/ServicesApi';
import { useGetAboutDataQuery } from '../../../store/apis/AboutSlice';
import { useEffect, useState } from 'react';

const EditServiceForm = () => {
  const [loading, setLoading] = useState(false);
  const { aboutId, serviceId } = useParams();

  const navigate = useNavigate();

  const { refetch } = useGetAboutDataQuery();

  const {
    data: serviceData,
    isFetching,
    isSuccess,
    error,
  } = useGetServiceDetailsQuery(`${aboutId}/${serviceId}`);

  const [icon, setIcon] = useState('');
  const [service, setService] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');

  useEffect(() => {
    if (isSuccess && !isFetching) {
      setIcon(serviceData.icon);
      setService(serviceData.service);
      setServiceDesc(serviceData.serviceDesc);
    }
  }, [
    isFetching,
    isSuccess,
    serviceData?.icon,
    serviceData?.service,
    serviceData?.serviceDesc,
  ]);

  return (
    <Container className='my-5'>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          updateServiceInDatabase(
            setLoading,
            aboutId,
            serviceId,
            icon,
            service,
            serviceDesc
          );
          refetch();
          navigate('/about');
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
    </Container>
  );
};

export default EditServiceForm;
