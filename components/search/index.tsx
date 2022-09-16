import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import React from "react";

const Search = () => {
  const [value, setValue] = React.useState("New car");
  const [min, setMin] = React.useState("10,000");
  const [max, setMax] = React.useState("100,000");
  return (
    <>
      <Box display={{ base: "block", lg: "none" }} px={4} py={2}>
        <Flex
          direction="column"
          w="full"
          p={2}
          border="1px solid #F1F1F1"
          borderRadius="6px"
          filter="drop-shadow(0px 2px 4px rgba(35, 35, 35, 0.1))"
        >
          <Flex
            justifyContent="space-between"
            boxShadow="inset 0px -1px 0px #F1F1F1"
            h={120}
            px={4}
            py={6}
            w="full"
            direction="column"
          >
            <Text fontWeight="bold">New/ Used</Text>
            <Flex w="full" alignItems="center" justifyContent="space-between">
              <Text color="#5F5F5F">New Cars</Text>
              <Icon color="#5F5F5F" as={FaChevronDown} />
            </Flex>
          </Flex>
          <Flex
            justifyContent="space-between"
            boxShadow="inset 0px -1px 0px #F1F1F1"
            h={120}
            px={4}
            py={6}
            w="full"
            direction="column"
          >
            <Text fontWeight="bold">Price Range</Text>
            <Flex w="full" alignItems="center" justifyContent="space-between">
              <Flex alignItems="center">
                <Icon color="#5F5F5F" mr={2} as={AiOutlineDollar} />
                <Text color="#5F5F5F"> $10,0000 -</Text>
                <Icon color="#5F5F5F" mx={2} as={AiOutlineDollar} />
                <Text color="#5F5F5F"> $100,0000</Text>
              </Flex>
              <Icon color="#5F5F5F" as={FaChevronDown} />
            </Flex>
          </Flex>
          <Flex
            justifyContent="space-between"
            boxShadow="inset 0px -1px 0px #F1F1F1"
            h={120}
            px={4}
            py={6}
            w="full"
            direction="column"
          >
            <Text fontWeight="bold">Vehicle Type</Text>
            <Flex w="full" alignItems="center" justifyContent="space-between">
              <Text color="#5F5F5F">+10 More</Text>
              <Icon color="#5F5F5F" as={FaChevronDown} />
            </Flex>
          </Flex>
          <Button mt={2} h="60px" colorScheme="red" w="full">
            Search
          </Button>
        </Flex>
      </Box>

      <Box h="80px" position="relative" display={{ base: "none", lg: "block" }}>
        <Box position="absolute" w="full" zIndex={1} top="-60px">
          <Flex
            bg="#FAFAFA"
            boxShadow="20px 20px 120px 15px rgba(0, 0, 0, 0.05)"
            border="1px solid #E3E3E3"
            borderRadius={10}
            mx={62}
            h="138px"
          >
            <Flex
              borderRadius="10px 0px 0px 10px"
              position="relative"
              w="290px"
              h="full"
              cursor="pointer"
              pl={{ base: 4, xl: 10 }}
              py={6}
              _hover={{
                bg: "white",
                boxShadow:
                  "0px -2px 10px rgba(35, 35, 35, 0.1), 0px 15px 25px rgba(35, 35, 35, 0.08)",
                "#car-status": {
                  display: "flex",
                },
              }}
            >
              <Flex
                h="full"
                w="full"
                pr={10}
                direction="column"
                borderRight="2px solid #F1F1F1"
                justifyContent="space-between"
              >
                <Text fontWeight="bold">New/ Used</Text>
                <Flex
                  w="full"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="#5F5F5F">{value}</Text>
                  <Icon color="#5F5F5F" as={FaChevronDown} />
                </Flex>
              </Flex>
              <Flex
                display="none"
                position="absolute"
                top={138}
                left={0}
                id="car-status"
                width={340}
                height={168}
                bg="white"
                borderRadius={5}
                px={10}
                py={6}
                boxShadow="0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)"
              >
                <RadioGroup onChange={setValue} value={value}>
                  <Stack
                    h="full"
                    justifyContent="space-between"
                    direction="column"
                  >
                    <Radio colorScheme="red" value="New car">
                      New Car ( Authorised Dealer)
                    </Radio>
                    <Radio colorScheme="red" value="New car parallel">
                      New Car ( Parallel Importer )
                    </Radio>
                    <Radio colorScheme="red" value="Used cars">
                      Used Cars
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
            </Flex>
            <Flex
              justifyContent="space-between"
              h="full"
              cursor="pointer"
              position="relative"
              pl={10}
              py={6}
              _hover={{
                bg: "white",
                boxShadow:
                  "0px -2px 10px rgba(35, 35, 35, 0.1), 0px 15px 25px rgba(35, 35, 35, 0.08)",
                "#price-range": {
                  display: "flex",
                },
              }}
              w="414px"
            >
              <Flex
                h="full"
                w="full"
                pr={10}
                direction="column"
                borderRight="2px solid #F1F1F1"
                justifyContent="space-between"
              >
                <Text fontWeight="bold">Price Range</Text>
                <Flex
                  minWidth={242}
                  w="full"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex alignItems="center">
                    <Icon color="#5F5F5F" mr={2} as={AiOutlineDollar} />
                    <Text color="#5F5F5F"> ${min} -</Text>
                    <Icon color="#5F5F5F" mx={2} as={AiOutlineDollar} />
                    <Text color="#5F5F5F"> ${max}</Text>
                  </Flex>
                  <Icon color="#5F5F5F" as={FaChevronDown} />
                </Flex>
              </Flex>
              <Flex
                display="none"
                position="absolute"
                direction="column"
                top={138}
                left={0}
                id="price-range"
                width={400}
                height={238}
                bg="white"
                borderRadius="15px"
                p={6}
                boxShadow="0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)"
              >
                <Text fontSize={16} mb={4} fontWeight={600}>
                  Price Range
                </Text>
                <Flex
                  alignItems="center"
                  pb={6}
                  borderBottom="1px solid #E3E3E3"
                >
                  <Flex
                    border="1px solid #E3E3E3"
                    borderRadius="5px"
                    direction="column"
                    w={160}
                    px={4}
                    py={2}
                  >
                    <Text mb={1} fontSize={12} color="#8C8C8C">
                      Min
                    </Text>
                    <Flex>
                      <Text mr={1} color="#232323" fontSize={14}>
                        S$
                      </Text>
                      <Input
                        color="#232323"
                        fontSize={14}
                        variant="unstyled"
                        value={min}
                        onChange={(event) => {
                          setMin(event.target.value);
                        }}
                      />
                    </Flex>
                  </Flex>

                  <Box mx={3} w="8px" h="1px" bg="#232323" />

                  <Flex
                    border="1px solid #E3E3E3"
                    borderRadius="5px"
                    direction="column"
                    w={160}
                    px={4}
                    py={2}
                  >
                    <Text mb={1} fontSize={12} color="#8C8C8C">
                      Max
                    </Text>
                    <Flex>
                      <Text mr={1} color="#232323" fontSize={14}>
                        S$
                      </Text>
                      <Input
                        color="#232323"
                        fontSize={14}
                        variant="unstyled"
                        value={max}
                        onChange={(event) => {
                          setMax(event.target.value);
                        }}
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <Box flex={1} />

                <Flex justifyContent="space-between">
                  <Button
                    variant="ghost"
                    fontWeight={600}
                    color="#B4B4B4"
                    colorScheme="gray"
                    onClick={() => {
                      setMin("0");
                      setMax("0");
                    }}
                  >
                    Clear
                  </Button>
                  <Button colorScheme="red">Save</Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              justifyContent="space-between"
              h="full"
              cursor="pointer"
              px={10}
              py={6}
              position="relative"
              _hover={{
                bg: "white",
                boxShadow:
                  "0px -2px 10px rgba(35, 35, 35, 0.1), 0px 15px 25px rgba(35, 35, 35, 0.08)",
                "#vehicle-type": {
                  display: "flex",
                },
              }}
              w="244px"
              direction="column"
            >
              <Text fontWeight="bold">Vehicle Type</Text>
              <Flex
                minWidth={112}
                w="full"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text color="#5F5F5F">+10 More</Text>
                <Icon color="#5F5F5F" as={FaChevronDown} />
              </Flex>
              <Flex
                display="none"
                position="absolute"
                direction="column"
                top={138}
                left={0}
                id="vehicle-type"
                width={{ base: 400, xl: 600 }}
                bg="white"
                borderRadius="15px"
                p={6}
                boxShadow="0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)"
              >
                <Text fontSize={16} mb={4} fontWeight={600}>
                  Vehicle Type
                </Text>

                <SimpleGrid
                  pb={6}
                  borderBottom="1px solid #E3E3E3"
                  columns={{ base: 2, xl: 3 }}
                  spacing={5}
                >
                  <Checkbox colorScheme="red">Bus</Checkbox>
                  <Checkbox colorScheme="red">Lorry</Checkbox>
                  <Checkbox colorScheme="red">SUV</Checkbox>
                  <Checkbox colorScheme="red">Classic Car</Checkbox>
                  <Checkbox colorScheme="red">MPV</Checkbox>
                  <Checkbox colorScheme="red">Truck</Checkbox>
                  <Checkbox colorScheme="red">Coupe</Checkbox>
                  <Checkbox colorScheme="red">Pickup</Checkbox>
                  <Checkbox colorScheme="red">Van (Passenger)</Checkbox>
                  <Checkbox colorScheme="red">Convertible</Checkbox>
                  <Checkbox colorScheme="red">Sedan</Checkbox>
                  <Checkbox colorScheme="red">Van (Goods)</Checkbox>
                  <Checkbox colorScheme="red">Hatchback</Checkbox>
                  <Checkbox colorScheme="red">Sport Car</Checkbox>
                  <Checkbox colorScheme="red">Wagon</Checkbox>
                </SimpleGrid>

                <Flex mt={6} justifyContent="space-between">
                  <Button
                    variant="ghost"
                    fontWeight={600}
                    color="#B4B4B4"
                    colorScheme="gray"
                  >
                    Clear
                  </Button>
                  <Button colorScheme="red">Save</Button>
                </Flex>
              </Flex>
            </Flex>
            <Box flex={1} />
            <Box
              px={{ base: 4, xl: 10 }}
              h="full"
              display="flex"
              alignItems="center"
            >
              <Button h="60px" w={140} colorScheme="red">
                Search
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Search;
