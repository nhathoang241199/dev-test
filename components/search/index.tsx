import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";

const Search = () => {
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
            bg="White"
            boxShadow="20px 20px 120px 15px rgba(0, 0, 0, 0.05)"
            border="1px solid #E3E3E3"
            borderRadius={10}
            mx={62}
            h="138px"
            alignItems="center"
            px={10}
          >
            <Flex
              w="290px"
              pr={10}
              h="60px"
              justifyContent="space-between"
              direction="column"
              borderRight="2px solid #F1F1F1"
            >
              <Text fontWeight="bold">New/ Used</Text>
              <Flex w="full" alignItems="center" justifyContent="space-between">
                <Text color="#5F5F5F">New Cars</Text>
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      aria-label="new/old"
                      icon={<Icon color="#5F5F5F" as={FaChevronDown} />}
                    />
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Button colorScheme="blue">Button</Button>
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Flex>
            </Flex>
            <Flex
              justifyContent="space-between"
              px={10}
              h="60px"
              w="414px"
              direction="column"
              borderRight="2px solid #F1F1F1"
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
                  <Text color="#5F5F5F"> $10,0000 -</Text>
                  <Icon color="#5F5F5F" mx={2} as={AiOutlineDollar} />
                  <Text color="#5F5F5F"> $100,0000</Text>
                </Flex>
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      aria-label="new/old"
                      icon={<Icon color="#5F5F5F" as={FaChevronDown} />}
                    />
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Button colorScheme="blue">Button</Button>
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Flex>
            </Flex>
            <Flex
              justifyContent="space-between"
              px={10}
              h="60px"
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
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      aria-label="new/old"
                      icon={<Icon color="#5F5F5F" as={FaChevronDown} />}
                    />
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Button colorScheme="blue">Button</Button>
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Flex>
            </Flex>
            <Box flex={1} />
            <Button h="60px" w={140} colorScheme="red">
              Search
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Search;
