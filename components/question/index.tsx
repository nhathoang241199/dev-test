import { Button, Flex, Heading } from "@chakra-ui/react";

const Question = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      h={694}
      bgImage="/question-bg.png"
      py={20}
      px={9}
      justifyContent="space-between"
    >
      <Heading
        color="white"
        textAlign="center"
        w={246}
        h={288}
        fontSize={48}
        fontWeight={600}
      >
        Questions about buying or renting?
      </Heading>
      <Button w="full" h="60px" colorScheme="red">
        Ask Us
      </Button>
    </Flex>
  );
};

export default Question;
