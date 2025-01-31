import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { subscribe } from '../../../redux/auth/authOperations';

import {
  FormLabel,
  Form,
  ErrorMessage,
  Button,
  SubscribeBox,
  TextForm,
  Field,
} from './SubscribeForm.styled';

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email...')
    .required('Input email...'),
});

export const SubscribeForm = () => {
  const dispatch = useDispatch();

  const [isConfirmed, setIsConfirmed] = useState(false);

  const [status, setStatus] = useState('');

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(subscribe(values));
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SubscribeBox>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={EmailSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormLabel name="email">
            <TextForm>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc
            </TextForm>
            <Field name="email" placeholder="Enter the email" />
            <ErrorMessage name="email" component="span" />
          </FormLabel>
          <Button type="submit">Subscribe</Button>
        </Form>
      </Formik>
    </SubscribeBox>
  );
};
