import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const Banner = () => {
  return (
    <Flex px={{ base: 4, lg: 0 }} py={{ base: 2, lg: 0 }}>
      <Box
        w="full"
        h={{ base: "142px", lg: 530 }}
        borderRadius={{ base: "5px", lg: 0 }}
        overflow="hidden"
        position="relative"
      >
        <Image
          src="/banner.png"
          alt="banner"
          objectFit="cover"
          h="full"
          w="full"
        />
        <Flex
          h="full"
          w="full"
          position="absolute"
          gap={2}
          top={{ base: 0, lg: 97 }}
          left={{ base: 0, lg: 108 }}
          px={4}
          alignItems="center"
        >
          <Flex flex={3} direction="column" alignSelf="flex-start" mt={4}>
            <Heading
              color="white"
              as="h2"
              fontSize={{ base: "20px", lg: "60px" }}
              textOverflow=""
              fontWeight="bold"
              mb={{ base: 2, lg: 4 }}
            >
              Car Marketplace
            </Heading>
            <Text
              w={{ base: 200, lg: 496 }}
              textOverflow={{ base: "ellipsis", lg: "unset" }}
              whiteSpace={{ base: "nowrap", lg: "normal" }}
              overflow="hidden"
              color="white"
              fontSize={{ base: "14px", lg: "18px" }}
              mb={{ base: 0, lg: 8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </Text>
            <Button
              w={196}
              display={{ base: "none", lg: "block" }}
              h="52px"
              colorScheme="red"
            >
              Get Started
            </Button>
          </Flex>
          <IconButton
            display={{ base: "inline-flex", lg: "none" }}
            rounded="full"
            bg="#EE1B24"
            aria-label="Get started"
            icon={<FiArrowRight color="white" />}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Banner;
