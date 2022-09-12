import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import {FaChevronDown} from 'react-icons/fa';
import {AiOutlineDollar} from 'react-icons/ai';

const Search = () => {
    return (
        <Box px={4} py={2}>
            <Flex direction='column' w='full' p={2} border='1px solid #F1F1F1' borderRadius='6px' filter='drop-shadow(0px 2px 4px rgba(35, 35, 35, 0.1))'> 
                <Flex justifyContent='space-between' boxShadow='inset 0px -1px 0px #F1F1F1' h={120} px={4} py={6} w='full'  direction='column'>
                    <Text fontWeight='bold'>New/ Used</Text>
                    <Flex w='full' alignItems='center'  justifyContent='space-between'>
                        <Text color='#5F5F5F' >New Cars</Text>
                        <Icon color='#5F5F5F' as={FaChevronDown} />
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' boxShadow='inset 0px -1px 0px #F1F1F1' h={120} px={4} py={6} w='full'  direction='column'>
                    <Text fontWeight='bold'>Price Range</Text>
                    <Flex w='full' alignItems='center'  justifyContent='space-between'>
                        <Flex alignItems='center'>
                            <Icon color='#5F5F5F' mr={2} as={AiOutlineDollar}/>
                            <Text color='#5F5F5F'>  $10,0000  -</Text>
                            <Icon color='#5F5F5F' mx={2} as={AiOutlineDollar}/>
                            <Text color='#5F5F5F'>  $100,0000</Text>

                        </Flex>
                        <Icon color='#5F5F5F' as={FaChevronDown} />
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' boxShadow='inset 0px -1px 0px #F1F1F1' h={120} px={4} py={6} w='full'  direction='column'>
                    <Text fontWeight='bold'>Vehicle Type</Text>
                    <Flex w='full' alignItems='center'  justifyContent='space-between'>
                        <Text color='#5F5F5F' >+10 More</Text>
                        <Icon color='#5F5F5F' as={FaChevronDown} />
                    </Flex>
                </Flex>
                <Button mt={2} h='60px' colorScheme='red' w='full'>Search</Button>
            </Flex>
        </Box>
    )
}

export default Search; 