import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { AiTwotoneMail } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { RiMapPinRangeFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Flex
        w="full"
        h="64px"
        display={{ base: "flex", lg: "none" }}
        px={4}
        py={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src="/logo.png" alt="logo" />
        <Icon w="18.75px" h="18.75px" color="#232323" as={IoSearchSharp} />
      </Flex>
      <Flex
        alignItems="flex-start"
        display={{ base: "none", lg: "flex" }}
        px={16}
        py={4}
      >
        <Icon mr={3} as={RiMapPinRangeFill} />
        <Text
          pr={5}
          borderRight="1px solid #E3E3E3"
          h="40px"
          w={188}
          fontSize={12}
        >
          71 Ayer Rajah Crescent, #06-14, Singapore 139951
        </Text>
        <Icon mr={3} ml={5} as={AiTwotoneMail} />
        <Text pr={5} h="40px" w={188} fontSize={12}>
          Email us at: hello@carbuyer.com.sg
        </Text>
        <Box flex={1} />
        <Icon mr={3} as={BsFillTelephoneFill} />
        <Flex direction="column">
          <Text fontSize={14} fontWeight={500}>
            +65 8808 7905
          </Text>
          <Text fontSize={14} fontWeight={500}>
            +7 (700) 51 51 518
          </Text>
        </Flex>
      </Flex>
      <Flex
        bg="#232323"
        alignItems="center"
        justifyContent="space-between"
        display={{ base: "none", lg: "flex" }}
        px={16}
        py={4}
      >
        <Image src="/big-logo.png" alt="ucars-logo" />
        <Flex>
          <Text
            mr="46px"
            cursor="pointer"
            _hover={{
              opacity: 0.8,
            }}
            color="white"
            fontSize={16}
            fontWeight={500}
          >
            New Cars
          </Text>
          <Text
            mr="46px"
            cursor="pointer"
            _hover={{
              opacity: 0.8,
            }}
            color="white"
            fontSize={16}
            fontWeight={500}
          >
            Used Cars
          </Text>
          <Text
            mr="46px"
            cursor="pointer"
            _hover={{
              opacity: 0.8,
            }}
            color="white"
            fontSize={16}
            fontWeight={500}
          >
            Reviews
          </Text>
          <Text
            mr="46px"
            cursor="pointer"
            _hover={{
              opacity: 0.8,
            }}
            color="white"
            fontSize={16}
            fontWeight={500}
          >
            News
          </Text>
        </Flex>
        <Button w={180} h="40px" colorScheme="red">
          Login
        </Button>
      </Flex>
    </>
  );
};

export default Header;
