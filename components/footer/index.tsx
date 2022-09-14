import { Box, Button, Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import {
  AiFillMail,
  AiFillPhone,
  AiOutlineDown,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { RiMapPinFill } from "react-icons/ri";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex direction="column" py={6} px={4}>
      <Image w={158} h="48px" src="/footer-logo.png" alt="logo" />
      <Flex mt={4}>
        <Icon color="#232323" as={RiMapPinFill} />
        <Text textAlign="center" flex={1} fontSize={12}>
          71 Ayer Rajah Crescent, #06-14, Singapore 139951
        </Text>
      </Flex>
      <Flex mt={4}>
        <Icon color="#232323" as={AiFillPhone} />
        <Text textAlign="center" flex={1} fontSize={12}>
          +65 8808 7905
        </Text>
      </Flex>
      <Flex pb={5} mt={4} borderBottom="1px solid #F1F2F5">
        <Icon color="#232323" as={AiFillMail} />
        <Text textAlign="center" flex={1} fontSize={12}>
          hello@carbuyer.com.sg
        </Text>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={4}
        borderBottom="1px solid #F1F2F5"
      >
        <Text fontSize={14} fontWeight={600}>
          About
        </Text>
        <Icon color="#262626" as={AiOutlineDown} />
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={4}
        borderBottom="1px solid #F1F2F5"
      >
        <Text fontSize={14} fontWeight={600}>
          Services
        </Text>
        <Icon color="#262626" as={AiOutlineDown} />
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={4}
        borderBottom="1px solid #F1F2F5"
      >
        <Text fontSize={14} fontWeight={600}>
          Resources
        </Text>
        <Icon color="#262626" as={AiOutlineDown} />
      </Flex>
      <Flex
        mb={5}
        alignItems="center"
        justifyContent="space-between"
        py={4}
        borderBottom="1px solid #F1F2F5"
      >
        <Text fontSize={14} fontWeight={600}>
          Legal
        </Text>
        <Icon color="#262626" as={AiOutlineDown} />
      </Flex>

      <Text mb={2} fontSize={12}>
        Get the <span style={{ color: "#EE1B24" }}>latest</span> automotive news
        sent to your inbox!
      </Text>

      <Flex mb={5}>
        <Input
          borderRadius="5px 0px 0px 5px"
          h="40px"
          px={4}
          py="10px"
          placeholder="Enter your email"
          border="1px solid #F3F3F3"
          fontSize={12}
          color="#8C8C8C"
        />
        <Button
          borderRadius="0px 5px 5px 0px"
          background="red.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={120}
        >
          <Text fontSize={12} fontWeight={600} color="white">
            Subscribe
          </Text>
        </Button>
      </Flex>

      <Flex mb={5}>
        <Text fontSize={12} mr={9}>
          Follow us
        </Text>
        <Flex>
          <Icon mr={2} color="#232323" as={AiOutlineInstagram} />
          <Icon mr={2} color="#232323" as={ImFacebook} />
          <Icon mr={2} color="#232323" as={FaTelegramPlane} />
          <Icon mr={2} color="#232323" as={ImLinkedin2} />
          <Icon mr={2} color="#232323" as={AiFillYoutube} />
        </Flex>
      </Flex>

      <Flex alignItems="center">
        <Image mr={2} h="16px" w={58} src="/ucars-logo.png" alt="ucars-logo" />
        <Text flex={1} textAlign="center" fontSize={10}>
          CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned by
          UCARS Pte Ltd
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
