import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";

const vehicles = [
  {
    id: 1,
    image: "/vehicle-1.png",
    name: "The Palace",
    brand: "Duplex",
    features: "Lekki,phase 2",
    price: "2,000",
  },
  {
    id: 2,
    image: "/vehicle-2.png",
    name: "IVY RORY",
    brand: "Duplex",
    features: "Lekki,phase 2",
    price: "2,000",
  },
  {
    id: "advertisement",
    advertisement: "/advertisement.png",
  },
  {
    id: 3,
    image: "/vehicle-3.png",
    name: "REXONA",
    brand: "Duplex",
    features: "Lekki,phase 2",
    price: "2,000",
  },
  {
    id: 4,
    image: "/vehicle-1.png",
    name: "The Palace",
    brand: "Duplex",
    features: "Lekki,phase 2",
    price: "2,000",
  },
  {
    id: 5,
    image: "/vehicle-2.png",
    name: "IVY RORY",
    brand: "Duplex",
    features: "Lekki,phase 2",
    price: "2,000",
  },
];

const FeaturedVehicles = () => {
  return (
    <Flex
      py={{ base: 6, lg: 20 }}
      px={{ base: 4, lg: 16 }}
      direction="column"
      alignItems={{ base: "center", lg: "flex-start" }}
      w="full"
    >
      <Flex justifyContent="space-between" w="full">
        <Flex direction="column">
          <Heading
            mb={2}
            color="red.500"
            fontSize={{ base: 32, lg: 48 }}
            fontWeight="bold"
          >
            Our Featured Vehicles.
          </Heading>
          <Text
            mb={{ base: 8, lg: 16 }}
            maxW={678}
            textAlign={{ base: "center", lg: "left" }}
            fontSize={{ base: 20, lg: 32 }}
          >
            One of our biggest product to be featured and that has sold out the
            most.
          </Text>
        </Flex>
        <Button
          display={{ base: "none", lg: "block" }}
          alignSelf="flex-end"
          mt={10}
          mb={16}
          px={12}
          colorScheme="red"
        >
          View More
        </Button>
      </Flex>
      <Box mb={{ base: 0, lg: "50px" }} w="full" overflowY="scroll">
        <Flex display="inline-flex">
          {vehicles.map((vehicle) => (
            <>
              {vehicle.advertisement ? (
                <Image
                  mr={10}
                  h={{ base: 305, lg: 320 }}
                  src="/advertisement.png"
                  alt="advertisement"
                />
              ) : (
                // <></>
                <Flex
                  border="1px solid #F1F2F5"
                  w={{ base: 390, lg: 416 }}
                  bg="white"
                  pr={6}
                  pl={9}
                  py={2}
                  mr={10}
                  borderRadius="0px 40px"
                  key={vehicle.id}
                  direction="column"
                >
                  <Image mb={14} src={vehicle.image} alt="vehicle" />
                  <Flex justifyContent="space-between" alignItems="flex-end">
                    <Flex direction="column">
                      <Heading fontSize={32} fontWeight={500} color="#232323">
                        {vehicle.name}
                      </Heading>
                      <Text fontSize={19} color="#232323">
                        {vehicle.features}
                      </Text>
                    </Flex>
                    <Flex direction="column">
                      <Text fontSize={19} color="#232323">
                        {vehicle.brand}
                      </Text>
                      <Text fontSize={19} fontWeight="bold" color="red.500">
                        ${vehicle.price}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              )}
            </>
          ))}
        </Flex>
      </Box>
      <Button
        display={{ base: "block", lg: "none" }}
        alignSelf="flex-end"
        mt={10}
        mb={16}
        px={12}
        colorScheme="red"
      >
        View More
      </Button>
    </Flex>
  );
};

export default FeaturedVehicles;
