'use client';

import { Box, Center, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import { FormErrorWrapper } from 'components/forms/FormErrorWrapper';
import { CategoryDropdown } from 'components/general_product/CategoryDropDown';
import { getCookie } from 'cookies-next';
import { useFormik } from 'formik';
import { useState, Fragment } from 'react';
import { FiTrash } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { Button, Input, Select } from 'ui-lib';
import { Textarea } from 'ui-lib/Textarea';
import { create_new_product } from 'utils/api_calls/product_api_calls';
import { catch_async_error } from 'utils/helpers/helper_functions';
import * as Yup from 'yup';

const ProductSpecInput = ({
  get_spec,
  delete_spec,
  id
}: {
  get_spec: Function;
  delete_spec: Function;
  id: string;
}) => {
  const [spec_name, set_spec_name] = useState('');
  const [spec_value, set_spec_value] = useState('');
  const [completed, set_completed] = useState(false);

  const save_spec = () => {
    if (completed) return;
    if (!spec_name || !spec_value) {
      return toast.error('Please fill out all specs');
    }
    get_spec({
      id,
      name: spec_name,
      value: spec_value,
      complete: true,
      deleted: false
    });
    set_completed(true);
  };

  return (
    <Fragment>
      <Input
        label="Specification"
        value={spec_name}
        onChange={(e: any) => set_spec_name(e.target.value)}
        disabled={completed}
      />
      <HStack>
        <Input
          label="Value"
          value={spec_value}
          onChange={(e: any) => set_spec_value(e.target.value)}
          disabled={completed}
        />
      </HStack>
      <VStack alignItems={'flex-start'} justifyContent="flex-end" p="1rem">
        <Box> </Box>
        <HStack color={'var(--shipam-primary-red)'} gap="1rem">
          {!completed ? (
            <Text onClick={save_spec} cursor={'pointer'}>
              Save
            </Text>
          ) : (
            <Center
              as="span"
              color={'var(--shipam-primary-red)'}
              fontSize="2rem"
              cursor={'pointer'}
              onClick={() => delete_spec(id)}
            >
              <FiTrash />
            </Center>
          )}
        </HStack>
      </VStack>
    </Fragment>
  );
};

export const CreateProductForm = () => {
  const user_id = getCookie('shipam_user_id');
  const [specs, setSpecs] = useState<any>([
    `${Math.round(Math.random() * 1000)}`
  ]);
  const [all_specs, set_all_specs] = useState<any[]>([]);
  const [complete, set_complete] = useState(false);
  const [loading, set_loading] = useState(false);
  const [product_category, set_product_category] = useState<any>(null);
  const max_specs = 10;

  const [errors, setErrors] = useState<any>();

  const save_this_spec = (data: any) => {
    console.log([...all_specs, data]);
    set_all_specs([...all_specs, data]);
    set_complete(true);
  };

  const add_new_spec = () => {
    if (!complete || all_specs.length === 0) return;
    if (specs.length > max_specs) {
      return toast.error('Too many specifications');
    }
    const new_id = `${Math.round(Math.random() * 1000)}`;
    setSpecs([...specs, new_id]);
    set_complete(false);
  };

  const remove_spec = (id: string) => {
    if (!complete || all_specs.length === 0) return;
    if (specs.length <= 1) {
      return toast.error('You need at least one specification');
    }
    const specs_arr = specs.filter((el: string) => el !== id);
    setSpecs(specs_arr);
    const all_specs_arr = all_specs.filter((spec) => spec.id !== id);
    set_all_specs(all_specs_arr);
    set_complete(true);
  };

  const create_product = catch_async_error(
    async (values: any) => {
      set_loading(true);
      console.log(values);
      const {
        description,
        minimum_order_quantity,
        name,
        price,
        product_category_id,
        stock_size
      } = values;
      const form_data = new FormData();

      form_data.append('description', description);
      form_data.append('minimum_order_quantity', minimum_order_quantity);
      form_data.append('name', name);
      form_data.append('price', price);
      form_data.append('product_category_id', product_category_id);
      form_data.append('stock_size', stock_size);
      form_data.append('user_id', user_id as string);
      form_data.append('currency', 'USD');
      form_data.append('metric', 'KG');
      for (let i = 0; i < all_specs.length; i++) {
        form_data.append('specifications[]', all_specs[i].name);
        form_data.append('specification_value[]', all_specs[i].value);
      }
      for (var pair of form_data.entries()) {
        console.log(pair[0] + ' - ' + pair[1]);
      }
      const res = await create_new_product(form_data);

      console.log(res);
      set_loading(false);
    },
    {
      successMessage: {
        description: 'Your product has been created successfully!'
      }
    }
  );

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Please enter your product name'),
    stock_size: Yup.number().required('Please enter your product stock size'),
    price: Yup.string().required('Please enter the price for this product'),
    minimum_order_quantity: Yup.string().required(
      'Please specify your minimum order quantity'
    ),
    description: Yup.string().required(
      'Please enter a description for this product'
    ),
    product_category_id: Yup.string().required(
      'Please specify a category for this product'
    )
  });

  const validateForm = (values: any) => {
    const errors: any = {};
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      stock_size: 1,
      price: '',
      minimum_order_quantity: '',
      description: '',
      product_category_id: ''
    },
    onSubmit: (values) => {
      create_product(values);
    },
    // onSubmit: auth_type === 'sign_up' ? create_account : login_to_account,
    validationSchema: formSchema,
    validateOnChange: false,
    validateOnBlur: false,
    validate: validateForm
  });

  return (
    <VStack alignItems={'flex-start'} w={'100%'}>
      <Grid templateColumns={'1fr 1fr 1fr'} gap="3rem" w={'100%'}>
        <FormErrorWrapper
          ChildComponent={Input}
          label="Product Name"
          onChange={formik.handleChange('name')}
          value={formik.values.name}
          error={formik.errors.name}
          border=".1rem solid #DEE2E6"
        />
        <FormErrorWrapper
          ChildComponent={Input}
          label="Quantity"
          type="number"
          min={1}
          onChange={formik.handleChange('stock_size')}
          value={formik.values.stock_size}
          error={formik.errors.stock_size}
          border=".1rem solid #DEE2E6"
        />
        <FormErrorWrapper
          ChildComponent={Input}
          label="Upload Picture"
          disabled
          // onChange={formik.handleChange('image')}
          // value={formik.values.image}
          // error={formik.errors.image}
          border=".1rem solid #DEE2E6"
        />
        <FormErrorWrapper
          ChildComponent={Input}
          label="Price"
          type="number"
          onChange={formik.handleChange('price')}
          value={formik.values.price}
          error={formik.errors.price}
          border=".1rem solid #DEE2E6"
        />
      </Grid>
      <Text fontWeight={'600'} lineHeight={'2rem'} my="2.3rem">
        Product Information
      </Text>
      <Grid templateColumns={'1fr 1fr 1fr'} gap="3rem" w={'100%'}>
        <FormErrorWrapper
          ChildComponent={Input}
          type="number"
          label="Min Order Quantity"
          onChange={formik.handleChange('minimum_order_quantity')}
          value={formik.values.minimum_order_quantity}
          error={formik.errors.minimum_order_quantity}
          border=".1rem solid #DEE2E6"
        />

        <FormErrorWrapper
          ChildComponent={CategoryDropdown}
          label="Product Category"
          use_id
          onChange={formik.handleChange('product_category_id')}
          // onChange={(e: any) => console.log(e.target.value)}
          value={formik.values.product_category_id}
          error={formik.errors.product_category_id}
          border=".1rem solid #DEE2E6"
        />
        <Box></Box>
        <FormErrorWrapper
          ChildComponent={Textarea}
          label="Product Description"
          h="15rem"
          resize="none"
          onChange={formik.handleChange('description')}
          value={formik.values.description}
          error={formik.errors.description}
          border=".1rem solid #DEE2E6"
        />
      </Grid>
      <Text fontWeight={'600'} lineHeight={'2rem'} my="2.3rem">
        Specifications
      </Text>
      <Grid templateColumns={'1fr 1fr 1fr'} gap="3rem" w={'100%'}>
        {specs.map((spec: string) => {
          return (
            <ProductSpecInput
              key={spec}
              get_spec={save_this_spec}
              delete_spec={remove_spec}
              id={spec}
            />
          );
        })}
      </Grid>
      <Grid templateColumns={'1fr 1fr 1fr'} gap="3rem" w={'100%'}>
        <HStack
          color="var(--shipam-primary-red)"
          gap=".4rem"
          cursor={'pointer'}
          onClick={add_new_spec}
        >
          <IoAdd fontSize={'2rem'} />
          <Text>Add Specification</Text>
        </HStack>
      </Grid>
      <Grid templateColumns={'1fr 1fr 1fr'} gap="3rem" w={'100%'} mt="10rem">
        <Button
          borderRadius="1rem"
          p="2.4rem"
          isDisabled={!complete || all_specs.length === 0}
          onClick={(e: any) => formik.handleSubmit()}
          isLoading={loading}
        >
          Upload Product To Store
        </Button>
      </Grid>
    </VStack>
  );
};
