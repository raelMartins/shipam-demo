'use client';

import {
  Box,
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
import { FormErrorWrapper } from 'components/forms/FormErrorWrapper';
import { Checkbox } from 'components/widgets/widgets';
import { Form, useFormik } from 'formik';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'ui-lib';
import { login, register } from 'utils/api_calls/auth_api_calls';
import { segoe } from 'utils/helpers/fonts';
import { catch_async_error } from 'utils/helpers/helper_functions';
import * as Yup from 'yup';

export const AuthForm = ({
  auth_type = 'sign_in',
  user_type = 'better'
}: {
  auth_type: string;
  user_type: string;
}) => {
  const [accepted_terms, set_accepted_terms] = useState(false);
  const [loading, setLoading] = useState(false);
  const validateForm = (values: any) => {
    const errors: any = {};
    if (auth_type === 'sign_up' && !accepted_terms) {
      toast.error('Accept terms before proceeding');
      return;
    }
    // if (files?.length <= 0 || !files) errors.photos = 'You must upload a photo for this listing';
    // if (values.status !== 'Post Construction' && !startYear) errors.start_year = 'Enter year';

    // if (values.status !== 'Post Construction' && !startPeriod) errors.start_period = 'Enter period';
    // if (!endYear) errors.end_year = 'Enter year';
    // if (!endPeriod) errors.end_period = 'Enter period';
    return errors;
  };

  const formSchema = Yup.object().shape({
    email: Yup.string().required('Please enter your email'),
    firstname:
      auth_type !== 'sign_up'
        ? Yup.string()
        : Yup.string().required('Please enter your first name'),
    lastname:
      auth_type !== 'sign_up'
        ? Yup.string()
        : Yup.string().required('Please enter your last name'),
    phone_number:
      auth_type !== 'sign_up'
        ? Yup.string()
        : Yup.string().required('Please enter your phone number'),
    password: Yup.string().required('Please enter your password'),
    password_confirmation:
      auth_type !== 'sign_up'
        ? Yup.string()
        : Yup.string().required('Please confirm your password')
  });

  const create_account = catch_async_error(
    async (e: any, values: any) => {
      try {
        setLoading(true);
        const res = await register({
          user_type,
          firstname: values.firstname,
          lastname: values.lastname,
          phone_number: values.phone_number,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation,
          agree_terms: 1
        });
        console.log(res);
        location.assign('/');
      } catch (err) {
        setLoading(false);
        throw err;
      }
    },
    {
      successMessage: {
        description: 'Your account has been created succesfully'
      }
    }
  );

  const login_to_account = catch_async_error(
    async (e: any, values: any) => {
      try {
        setLoading(true);
        let res = await login({
          email: values.email,
          password: values.password
        });
        console.log(res);
        if (!user_type) {
          location.assign(
            `${location.protocol}//${user_type}.${location.host}/`
          );
        } else {
          location.assign('/');
        }
      } catch (err) {
        setLoading(false);
        throw err;
      }
    },
    {
      successMessage: {
        description: 'Logged in succesfully'
      }
    }
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      phone_number: '',
      password: '',
      password_confirmation: ''
    },
    onSubmit: (values) => {
      auth_type === 'sign_up'
        ? create_account(null, values)
        : login_to_account(null, values);
    },
    // onSubmit: auth_type === 'sign_up' ? create_account : login_to_account,
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
        {auth_type.split('_').join(' ')}
      </CardHeader>
      <CardBody>
        <Box as="form" onSubmit={formik.handleSubmit}>
          <Grid gap={'2rem'}>
            {auth_type === 'sign_in' ? (
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
                    type="password"
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
                      onChange={formik.handleChange('firstname')}
                      value={formik.values.firstname}
                      error={formik.errors.firstname}
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
                      onChange={formik.handleChange('lastname')}
                      value={formik.values.lastname}
                      error={formik.errors.lastname}
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
                    onChange={formik.handleChange('phone_number')}
                    value={formik.values.phone_number}
                    error={formik.errors.phone_number}
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
                    type="password"
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
                    type="password"
                    bg="#F9F9F9"
                    borderRadius=".64rem"
                    padding="1.6rem"
                    fontSize="1.4rem"
                    onChange={formik.handleChange('password_confirmation')}
                    value={formik.values.password_confirmation}
                    error={formik.errors.password_confirmation}
                    border=".1rem solid #DEE2E6"
                  />
                </VStack>
                <Flex
                  align="center"
                  gap="1rem"
                  onClick={() => set_accepted_terms(!accepted_terms)}
                  cursor={'pointer'}
                >
                  <Checkbox is_active={accepted_terms} /> I agree to the terms
                  of service
                </Flex>
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
              onClick={(e: any) => formik.handleSubmit()}
              isLoading={loading}
              isDisabled={auth_type === 'sign_up' && !accepted_terms}
            >
              {auth_type.split('_').join(' ')}
            </Button>
            <Divider />
            <Flex
              gap={'.4rem'}
              justify={'center'}
              align={'center'}
              mt="-1rem"
              mb="2rem"
            >
              {auth_type === 'sign_up' ? (
                <>
                  Already have an account?{' '}
                  <Link
                    href="/auth/login"
                    style={{ color: 'var(--shipam-primary-red)' }}
                  >
                    Sign in
                  </Link>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{' '}
                  <Link
                    href="/auth/join-shipam"
                    style={{ color: 'var(--shipam-primary-red)' }}
                  >
                    Create an account
                  </Link>
                </>
              )}
            </Flex>
          </Grid>
        </Box>
      </CardBody>
    </Card>
  );
};
