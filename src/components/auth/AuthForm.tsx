'use client';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FormLabel,
  Grid,
  Input,
  Text,
  VStack
} from '@chakra-ui/react';
import axios from 'axios';
import { FormErrorWrapper } from 'components/forms/FormErrorWrapper';
import { Form, useFormik } from 'formik';
import { useEffect } from 'react';
import { segoe } from 'utils/helpers/fonts';
import * as Yup from 'yup';

export const AuthForm = ({ type = 'sign_in' }) => {
  const validateForm = (values: any) => {
    console.log(values);
    const errors = {};
    // if (files?.length <= 0 || !files) errors.photos = 'You must upload a photo for this listing';
    // if (values.status !== 'Post Construction' && !startYear) errors.start_year = 'Enter year';

    // if (values.status !== 'Post Construction' && !startPeriod) errors.start_period = 'Enter period';
    // if (!endYear) errors.end_year = 'Enter year';
    // if (!endPeriod) errors.end_period = 'Enter period';
    return errors;
  };

  const formSchema = Yup.object().shape({
    email: Yup.string().required('Please enter your email'),
    first_name:
      type !== 'sign_up'
        ? Yup.string()
        : Yup.string().required('Please enter your first name'),
    last_name:
      type !== 'sign_up'
        ? Yup.string()
        : Yup.string().required('Please enter your last name'),
    phone:
      type !== 'sign_up'
        ? Yup.string()
        : Yup.string().required('Please enter your phone number'),
    password: Yup.string().required('Please enter your password'),
    password_confirm:
      type !== 'sign_up'
        ? Yup.string()
        : Yup.string().required('Please confirm your password')
  });

  const signup = async (values: any) => {
    try {
      let res = await axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        data: { email: values.email, password: values.password }
      });
      console.log(res);
    } catch (err: any) {
      console.log(err);
      console.log(err.response);
    }
  };

  const login = async (values: any) => {
    try {
      let res = await axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        data: { email: values.email, password: values.password }
      });
      console.log(res);
    } catch (err: any) {
      console.log(err);
      console.log(err.response);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
      password: '',
      password_confirm: ''
    },
    // onSubmit: (values) => {
    //   type === 'sign_up' ? signup : login;
    // },
    onSubmit: type === 'sign_up' ? signup : login,
    validationSchema: formSchema,
    validateOnChange: false,
    validateOnBlur: false,
    validate: validateForm
  });

  return (
    <Card
      w="40rem"
      maxW={'100%'}
      className={segoe.className}
      borderRadius={'.64rem'}
      box-shadow="0px 2.4000000953674316px 8px 0px #0000001A"
    >
      <CardHeader textTransform={'capitalize'} fontWeight={'600'}>
        {type.split('_').join(' ')}
      </CardHeader>
      <CardBody>
        <Box as="form" onSubmit={formik.handleSubmit}>
          <Grid gap={'2rem'}>
            {type === 'sign_in' ? (
              <>
                <VStack alignItems={'flex-start'} spacing={'0rem'}>
                  <FormLabel
                    fontSize={'1.6rem'}
                    lineHeight={'2.2rem'}
                    m="none"
                    textAlign={'left'}
                    color="#5656561"
                  >
                    Email
                  </FormLabel>
                  <FormErrorWrapper
                    ChildComponent={Input}
                    bg="#F9F9F9"
                    borderRadius=".64rem"
                    padding="1.6rem"
                    fontSize="1.4rem"
                    onChange={formik.handleChange('email')}
                    value={formik.values.email}
                    error={formik.errors.email}
                    border=".1rem solid #DEE2E6"
                  />
                </VStack>
                <VStack alignItems={'flex-start'} spacing={'0rem'}>
                  <FormLabel
                    fontSize={'1.6rem'}
                    lineHeight={'2.2rem'}
                    m="none"
                    textAlign={'left'}
                    color="#5656561"
                  >
                    Password
                  </FormLabel>
                  <FormErrorWrapper
                    ChildComponent={Input}
                    bg="#F9F9F9"
                    borderRadius=".64rem"
                    padding="1.6rem"
                    fontSize="1.4rem"
                    onChange={formik.handleChange('password')}
                    value={formik.values.password}
                    error={formik.errors.password}
                    border=".1rem solid #DEE2E6"
                  />
                </VStack>
              </>
            ) : (
              <>
                <Grid templateColumns={'repeat(2, 1fr)'} gap={'1rem'}>
                  <VStack alignItems={'flex-start'} spacing={'0rem'}>
                    <FormLabel
                      fontSize={'1.6rem'}
                      lineHeight={'2.2rem'}
                      m="none"
                      textAlign={'left'}
                      color="#5656561"
                    >
                      First Name
                    </FormLabel>
                    <FormErrorWrapper
                      ChildComponent={Input}
                      bg="#F9F9F9"
                      borderRadius=".64rem"
                      padding="1.6rem"
                      fontSize="1.4rem"
                      // onChange={() => {
                      //   console.log(formik);
                      // }}
                      onChange={formik.handleChange('first_name')}
                      value={formik.values.first_name}
                      error={formik.errors.first_name}
                      border=".1rem solid #DEE2E6"
                    />
                  </VStack>
                  <VStack alignItems={'flex-start'} spacing={'0rem'}>
                    <FormLabel
                      fontSize={'1.6rem'}
                      lineHeight={'2.2rem'}
                      m="none"
                      textAlign={'left'}
                      color="#5656561"
                    >
                      Last Name
                    </FormLabel>
                    <FormErrorWrapper
                      ChildComponent={Input}
                      bg="#F9F9F9"
                      borderRadius=".64rem"
                      padding="1.6rem"
                      fontSize="1.4rem"
                      onChange={formik.handleChange('last_name')}
                      value={formik.values.last_name}
                      error={formik.errors.last_name}
                      border=".1rem solid #DEE2E6"
                    />
                  </VStack>
                </Grid>
                <VStack alignItems={'flex-start'} spacing={'0rem'}>
                  <FormLabel
                    fontSize={'1.6rem'}
                    lineHeight={'2.2rem'}
                    m="none"
                    textAlign={'left'}
                    color="#5656561"
                  >
                    Email
                  </FormLabel>
                  <FormErrorWrapper
                    ChildComponent={Input}
                    bg="#F9F9F9"
                    borderRadius=".64rem"
                    padding="1.6rem"
                    fontSize="1.4rem"
                    onChange={formik.handleChange('email')}
                    value={formik.values.email}
                    error={formik.errors.email}
                    border=".1rem solid #DEE2E6"
                  />
                </VStack>
                <VStack alignItems={'flex-start'} spacing={'0rem'}>
                  <FormLabel
                    fontSize={'1.6rem'}
                    lineHeight={'2.2rem'}
                    m="none"
                    textAlign={'left'}
                    color="#5656561"
                  >
                    Phone
                  </FormLabel>
                  <FormErrorWrapper
                    ChildComponent={Input}
                    bg="#F9F9F9"
                    borderRadius=".64rem"
                    padding="1.6rem"
                    fontSize="1.4rem"
                    onChange={formik.handleChange('phone')}
                    value={formik.values.phone}
                    error={formik.errors.phone}
                    border=".1rem solid #DEE2E6"
                  />
                </VStack>
                <VStack alignItems={'flex-start'} spacing={'0rem'}>
                  <FormLabel
                    fontSize={'1.6rem'}
                    lineHeight={'2.2rem'}
                    m="none"
                    textAlign={'left'}
                    color="#5656561"
                  >
                    Create Password
                  </FormLabel>
                  <FormErrorWrapper
                    ChildComponent={Input}
                    bg="#F9F9F9"
                    borderRadius=".64rem"
                    padding="1.6rem"
                    fontSize="1.4rem"
                    onChange={formik.handleChange('password')}
                    value={formik.values.password}
                    error={formik.errors.password}
                    border=".1rem solid #DEE2E6"
                  />
                </VStack>
                <VStack alignItems={'flex-start'} spacing={'0rem'}>
                  <FormLabel
                    fontSize={'1.6rem'}
                    lineHeight={'2.2rem'}
                    m="none"
                    textAlign={'left'}
                    color="#5656561"
                  >
                    Confirm Password
                  </FormLabel>
                  <FormErrorWrapper
                    ChildComponent={Input}
                    bg="#F9F9F9"
                    borderRadius=".64rem"
                    padding="1.6rem"
                    fontSize="1.4rem"
                    onChange={formik.handleChange('password_confirm')}
                    value={formik.values.password_confirm}
                    error={formik.errors.password_confirm}
                    border=".1rem solid #DEE2E6"
                  />
                </VStack>
              </>
            )}
            <Button
              bg="var(--shipam-primary-red)"
              color={'#ffffff'}
              fontSize={'1.6rem'}
              borderRadius={'.64rem'}
              w="full"
              textTransform={'capitalize'}
              fontWeight={'400'}
              padding={'1.6rem'}
              _hover={{ backgroundColor: 'var(--shipam-primary-red)' }}
              _active={{ backgroundColor: 'var(--shipam-primary-red)' }}
              _focus={{ backgroundColor: 'var(--shipam-primary-red)' }}
              onClick={() => formik.handleSubmit()}
            >
              {type.split('_').join(' ')}
            </Button>
            <Divider />
            <Flex
              gap={'.4rem'}
              justify={'center'}
              align={'center'}
              mt="-1rem"
              mb="2rem"
            >
              Already have an account?{' '}
              <Text color={'var(--shipam-primary-red)'}>Sign in</Text>
            </Flex>
          </Grid>
        </Box>
      </CardBody>
    </Card>
  );
};
