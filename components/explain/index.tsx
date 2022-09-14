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
      <Heading as="h2" color="red.500" fontSize={32} fontWeight="bold">
        How it works.
      </Heading>
      <Text color="white" fontSize={20}>
        This is how our products works
      </Text>
      {explains.map((explain, index) => (
        <Flex
          mt={10}
          direction="column"
          alignItems="center"
          p={2}
          key={index}
          w={388}
          h={320}
        >
          <Image src={explain.image} alt="explain image" />
          <Heading mt={10} fontSize={24} fontWeight={500} color="white">
            {explain.title}
          </Heading>
          <Text textAlign="center" mt={3} w={300} color="white">
            {explain.content}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default Explain;

const StyledSection = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
