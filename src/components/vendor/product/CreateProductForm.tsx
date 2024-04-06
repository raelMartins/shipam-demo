'use client';

import { Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import { CategoryDropdown } from 'components/general_product/CategoryDropDown';
import { useState, Fragment } from 'react';
import { Input, Select } from 'ui-lib';
import { Textarea } from 'ui-lib/Textarea';

export const CreateProductForm = () => {
  const [specs, setSpecs] = useState<any>({
    specs0: { name: '', value: '' },
    specs1: { name: '', value: '' },
    specs3: { name: '', value: '' },
    specs4: { name: '', value: '' },
    specs5: { name: '', value: '' },
    specs6: { name: '', value: '' },
    specs7: { name: '', value: '' },
    specs8: { name: '', value: '' },
    specs9: { name: '', value: '' }
  });
  const [errors, setErrors] = useState<any>();
  const [specsCount, setSpecsCount] = useState(1);
  const [specs2, setSpecs2] = useState([{ name: '', value: '' }]);

  const enter_spec = ({ spec, value }: { spec: string; value: string }) => {
    const old_specs = specs;
    const old_errors = errors;
    if (old_specs[`${spec}`]) {
      old_errors[`${spec}`] = 'Duplicate specification';
    } else if (old_errors[`${spec}`]) {
      delete old_errors[`${spec}`];
    }
    old_specs[`${spec}`] = value;
    setSpecs(old_specs);
    setErrors(old_errors);
  };

  const change_spec_name = ({
    index,
    value
  }: {
    index: number;
    value: string;
  }) => {
    console.log(index, value);
    const new_specs = specs;
    new_specs[`specs${index}`] = { ...new_specs[index], name: value };
    console.log(new_specs);
    setSpecs(new_specs);
  };

  const change_spec_value = ({
    index,
    value
  }: {
    index: number;
    value: string;
  }) => {
    console.log(index, value);
    const new_specs = specs;
    new_specs[`specs${index}`] = { ...new_specs[index], value: value };
    console.log(new_specs);
    setSpecs(new_specs);
  };
  return (
    <VStack alignItems={'flex-start'} w={'100%'}>
      <Grid templateColumns={'1fr 1fr 1fr'} gap="3rem" w={'100%'}>
        <Input label="Product Name" />
        <Input label="Quantity" />
        <Input label="Upload Picture" />
        <Input label="Price" />
        {/* <Box></Box>
        <Box></Box>
        <Input label="Price" /> */}
      </Grid>
      <Text fontWeight={'600'} lineHeight={'2rem'} my="2.3rem">
        Product Information
      </Text>
      <Grid templateColumns={'1fr 1fr 1fr'} gap="3rem" w={'100%'}>
        <Input label="Product Type" />

        <CategoryDropdown label="Product Category" />
        <Box></Box>
        <Textarea label="Product Description" h="15rem" resize="none" />
        {/* <Box></Box>
        <Box></Box>
        <Input label="Price" /> */}
      </Grid>
      <Text fontWeight={'600'} lineHeight={'2rem'} my="2.3rem">
        Specifications
      </Text>
      <Grid templateColumns={'1fr 1fr 1fr'} gap="3rem" w={'100%'}>
        {Object.entries(specs).map((el: any, i: number) => (
          <Fragment key={i}>
            <Input
              label="Specification"
              value={specs[`specs${i}`]?.name}
              onChange={(e: any) =>
                change_spec_name({ index: i, value: e.target.value })
              }
            />
            <HStack>
              <Input
                label="Value"
                value={specs[`specs${i}`]?.value}
                onChange={(e: any) =>
                  change_spec_value({ index: i, value: e.target.value })
                }
              />
            </HStack>
            <Box></Box>
          </Fragment>
        ))}
      </Grid>
    </VStack>
  );
};
