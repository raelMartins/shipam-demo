'use client';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { Checkbox, RadioButton, StarRatings } from 'components/widgets/widgets';
import Link from 'next/link';

export const SidebarFilters = ({}) => {
  return (
    <Accordion
      defaultIndex={[0, 1, 2, 3, 4, 5, 6, 7]}
      allowMultiple
      w={'240px'}
      fontSize={'1.6rem'}
      lineHeight={'2rem'}
    >
      <AccordionItem border={'none'} borderBottom={'.1rem solid #DEE2E7'}>
        <AccordionButton
          p={'2rem 0rem'}
          _hover={{ background: 'inherit' }}
          color="#1C1C1C"
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={'1.6rem'}
            lineHeight={'2rem'}
            fontWeight={'600'}
          >
            Category
          </Box>
          <AccordionIcon fontSize={'2rem'} />
        </AccordionButton>
        <AccordionPanel px={'0px'} color={'#505050'}>
          <Flex direction={'column'} height={'100%'} gap={'1rem'}>
            <Text>Mobile accessory</Text>
            <Text>Electronics</Text>
            <Text>Smartphones</Text>
            <Text>Modern Tech</Text>
            <Text color="var(--shipam-primary-red)" cursor={'pointer'}>
              See all
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem border={'none'} borderBottom={'.1rem solid #DEE2E7'}>
        <AccordionButton
          p={'2rem 0rem'}
          _hover={{ background: 'inherit' }}
          color="#1C1C1C"
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={'1.6rem'}
            lineHeight={'2rem'}
            fontWeight={'600'}
          >
            Brands
          </Box>
          <AccordionIcon fontSize={'2rem'} />
        </AccordionButton>
        <AccordionPanel px={'0px'} color={'#505050'}>
          <Flex direction={'column'} height={'100%'} gap={'1rem'}>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>Samsung</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>Apple</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>Huawei</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>Pocco</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>Lenovo</Text>
            </Flex>

            <Text color="var(--shipam-primary-red)" cursor={'pointer'}>
              See all
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem border={'none'} borderBottom={'.1rem solid #DEE2E7'}>
        <AccordionButton
          p={'2rem 0rem'}
          _hover={{ background: 'inherit' }}
          color="#1C1C1C"
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={'1.6rem'}
            lineHeight={'2rem'}
            fontWeight={'600'}
          >
            Features
          </Box>
          <AccordionIcon fontSize={'2rem'} />
        </AccordionButton>
        <AccordionPanel px={'0px'} color={'#505050'}>
          <Flex direction={'column'} height={'100%'} gap={'1rem'}>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>Metallic</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>Plastic Cover</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>8GB RAM</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>Super Power</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <Text>Large Memory</Text>
            </Flex>

            <Text color="var(--shipam-primary-red)" cursor={'pointer'}>
              See all
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem border={'none'} borderBottom={'.1rem solid #DEE2E7'}>
        <AccordionButton
          p={'2rem 0rem'}
          _hover={{ background: 'inherit' }}
          color="#1C1C1C"
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={'1.6rem'}
            lineHeight={'2rem'}
            fontWeight={'600'}
          >
            Price Range
          </Box>
          <AccordionIcon fontSize={'2rem'} />
        </AccordionButton>
        <AccordionPanel px={'0px'} color={'#505050'}>
          <Flex direction={'column'} height={'100%'} gap={'1rem'}>
            <RangeSlider
              // aria-label={['min', 'max']}
              defaultValue={[30, 80]}
              onChangeEnd={(val) => console.log(val)}
            >
              <RangeSliderTrack bg="red.100">
                <RangeSliderFilledTrack bg="var(--shipam-primary-red)" />
              </RangeSliderTrack>
              <RangeSliderThumb
                boxSize={6}
                index={0}
                _focus={{ outline: 'none' }}
                _focusVisible={{ outline: 'none' }}
              />
              <RangeSliderThumb
                boxSize={6}
                index={1}
                _focus={{ outline: 'none' }}
                _focusVisible={{ outline: 'none' }}
              />
            </RangeSlider>
            <Flex gap={'1.6rem'}>
              <Box>
                <Text mb="1rem">Min</Text>
                <Input
                  type="text"
                  borderRadius={'.6rem'}
                  border=".1rem solid #DEE2E7"
                  bg="#fff"
                  p="2rem"
                />
              </Box>
              <Box>
                <Text mb="1rem">Max</Text>
                <Input
                  type="text"
                  borderRadius={'.6rem'}
                  border=".1rem solid #DEE2E7"
                  bg="#fff"
                  p="2rem"
                />
              </Box>
            </Flex>
            <Button
              bg="#fff"
              color={'var(--shipam-primary-red)'}
              p="2rem"
              width={'100%'}
              fontWeight={'500'}
              fontSize={'1.6rem'}
              lineHeight={'2rem'}
              boxShadow="0rem .1rem .2rem 0rem #38383814"
              borderRadius={'.6rem'}
              border=".1rem solid #DEE2E7"
            >
              Apply
            </Button>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem border={'none'} borderBottom={'.1rem solid #DEE2E7'}>
        <AccordionButton
          p={'2rem 0rem'}
          _hover={{ background: 'inherit' }}
          color="#1C1C1C"
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={'1.6rem'}
            lineHeight={'2rem'}
            fontWeight={'600'}
          >
            Condition
          </Box>
          <AccordionIcon fontSize={'2rem'} />
        </AccordionButton>
        <AccordionPanel px={'0px'} color={'#505050'}>
          <Flex direction={'column'} height={'100%'} gap={'1rem'}>
            <Flex gap={'1.6rem'}>
              <RadioButton />
              <Text>Any</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <RadioButton />
              <Text>Refurbished</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <RadioButton />
              <Text>Brand New</Text>
            </Flex>
            <Flex gap={'1.6rem'}>
              <RadioButton />
              <Text>Old Items</Text>
            </Flex>
            <Text color="var(--shipam-primary-red)" cursor={'pointer'}>
              See all
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem border={'none'} borderBottom={'.1rem solid #DEE2E7'}>
        <AccordionButton
          p={'2rem 0rem'}
          _hover={{ background: 'inherit' }}
          color="#1C1C1C"
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={'1.6rem'}
            lineHeight={'2rem'}
            fontWeight={'600'}
          >
            Rating
          </Box>
          <AccordionIcon fontSize={'2rem'} />
        </AccordionButton>
        <AccordionPanel px={'0px'} color={'#505050'}>
          <Flex direction={'column'} height={'100%'} gap={'1rem'}>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <StarRatings rating={5} />
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <StarRatings rating={4} />
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <StarRatings rating={3} />
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <StarRatings rating={2} />
            </Flex>
            <Flex gap={'1.6rem'}>
              <Checkbox />
              <StarRatings rating={1} />
            </Flex>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
