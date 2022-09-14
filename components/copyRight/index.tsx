import { Flex, Text } from "@chakra-ui/react";

const CopyRight = () => {
  return (
    <Flex py="14px" bg="#232323" alignItems="center" justifyContent="center">
      <Text fontSize={12} color="white">
        © 2022. All rights reserved.
      </Text>
    </Flex>
  );
};

export default CopyRight;
