import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const explains = [
  {
    image: "/explain-1.png",
    title: "Find Car",
    content:
      "Our cars are located at prime areas where by there won’t be problem with transportation ",
  },
  {
    image: "/explain-2.png",
    title: "Make payments",
    content:
      "Our estates comes with good network,portable water , 24hrs light and round the clock security.",
  },
  {
    image: "/explain-3.png",
    title: "Make it Official ",
    content:
      "We have been in business for over 32 years,for client outside the country you can trust  us to deliver well. ",
  },
];

const Explain = () => {
  return (
    <Box sx={StyledSection} bg="#232323" py={6} px={4}>
      <Heading
        as="h2"
        color="red.500"
        fontSize={{ base: 32, lg: 40 }}
        fontWeight="bold"
      >
        How it works.
      </Heading>
      <Text color="white" fontSize={{ base: 20, lg: 32 }}>
        This is how our products works
      </Text>
      <Flex
        justifyContent="space-evenly"
        pt={{ base: 0, lg: 140 }}
        direction={{ base: "column", xl: "row" }}
      >
        {explains.map((explain, index) => (
          <Flex
            mt={{ base: 10, lg: 0 }}
            direction="column"
            alignItems="center"
            p={2}
            key={index}
            w={388}
            h={{ base: 320, lg: "480px" }}
          >
            <Image src={explain.image} alt="explain image" />
            <Heading
              mt={10}
              fontSize={{ base: 24, lg: 36 }}
              fontWeight={500}
              color="white"
            >
              {explain.title}
            </Heading>
            <Text
              textAlign="center"
              fontSize={{ base: 16, lg: 24 }}
              mt={3}
              w={{ base: 300, lg: 338 }}
              color="white"
            >
              {explain.content}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Explain;

const StyledSection = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
