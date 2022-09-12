import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import {IoSearchSharp} from 'react-icons/io5';

const Header = () => {
    return (
<Flex w='full' h='64px' px={4} py={3} justifyContent='space-between' alignItems='center'>
    <Image src='/logo.png' alt='logo' />
    <Icon  w='18.75px' h='18.75px' color='#232323'  as={IoSearchSharp}/>
</Flex>
)
    
}

export default Header;