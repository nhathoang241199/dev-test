import { Button, Flex, Heading } from "@chakra-ui/react";

const Question = () => {
  return (
    <Flex
      direction="column"
      alignItems={{ base: "center", lg: "flex-start" }}
      h={694}
      bgImage={{ base: "/question-bg.png", lg: "/desktop-question-bg.png" }}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      py={20}
      px={9}
      justifyContent="space-between"
    >
      <Heading
        color="white"
        textAlign="center"
        w={{ base: 246, lg: 390 }}
        h={288}
        fontSize={{ base: 48, lg: 76 }}
        fontWeight={600}
      >
        Questions about buying or renting?
      </Heading>
      <Button w={{ base: "full", lg: 410 }} h="60px" colorScheme="red">
        Ask Us
      </Button>
    </Flex>
  );
};

export default Question;
