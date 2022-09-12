import { Box, Button, Flex, Heading, IconButton, Image, Text} from "@chakra-ui/react";
import {FiArrowRight} from 'react-icons/fi';

const Banner = () => {
    return(
        <Flex px={4} py={2}>
            <Box w='full' h='142px' borderRadius='5px' overflow='hidden' position='relative'>
                <Image src="/banner.png" alt="banner" objectFit='cover' h='full' w='full' />
                <Flex h='full' w='full' position='absolute' gap={2} top={0} px={4} alignItems='center'>
                    <Flex flex={3} direction='column' alignSelf='flex-start' mt={4}  >
                        <Heading color='white' as='h2' fontSize='20px' fontWeight='bold'>Car Marketplace</Heading>
                        <Text w={200} h={4} textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden' color='white' fontSize='14px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</Text>
                    </Flex>
                        <IconButton rounded='full' bg='#EE1B24' aria-label='Get started' icon={<FiArrowRight color="white"/>} />
                   
                </Flex>
            </Box>
        </Flex>
    )
}

export default Banner; 