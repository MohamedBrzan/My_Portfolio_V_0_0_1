import { useNavigate, useParams } from 'react-router-dom';
import {
  useEditServiceMutation,
  useGetServiceDetailsQuery,
} from '../../../store/apis/ServiceSlice';
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

  const [updateService, { isLoading }] = useEditServiceMutation();

  const [icon, setIcon] = useState('');
  const [service, setService] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');

  useEffect(() => {
    if (isSuccess) {
      setIcon(serviceData.icon);
      setService(serviceData.service);
      setServiceDesc(serviceData.serviceDesc);
    }
  }, [isSuccess, serviceData]);

  const canSave = [icon, service, serviceDesc].every(Boolean) && !isLoading;

  const submitUpdateService = async () => {
    if (canSave) {
      await updateService({ id: serviceId, icon, service, serviceDesc });
    }
  };

  return (
    <Container className='my-5'>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submitUpdateService();

          updateServiceInDatabase(
            setLoading,
            aboutId,
            serviceId,
            icon,
            service,
            serviceDesc
          );
          refetch();
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
