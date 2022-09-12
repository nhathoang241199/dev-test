import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const newCars = [
  {
    id: 1,
    image: "/new-car-1.png",
    name: "BMW X3",
    price: "248,800",
    priceAMonth: "2,302",
    variantCount: 4,
    brandImage: "/bmw-brand.png",
    brandName: "Performance Motors",
    isWithCEO: true,
  },
  {
    id: "advertisement",
    advertisement: "/advertisement.png",
  },
  {
    id: 2,
    image: "/new-car-2.png",
    name: "Alpine A110",
    price: "248,800",
    priceAMonth: "2,302",
    variantCount: 3,
    brandImage: "/alp-brand.png",
    brandName: "Wearnes Automotive",
    isWithCEO: true,
  },
  {
    id: 3,
    image: "/new-car-3.png",
    name: "Aston Martin DBS Superlegge...",
    price: null,
    priceAMonth: "2,302",
    variantCount: 1,
    brandImage: "/ast-brand.png",
    brandName: "Wearnes Automotive",
    isWithCEO: false,
  },
  {
    id: 4,
    image: "/new-car-4.png",
    name: "Alfa Romeo Stelvio",
    price: "248,800",
    priceAMonth: "2,302",
    variantCount: 3,
    brandImage: "/bmw-brand.png",
    brandName: "EuroAutomobile",
    isWithCEO: true,
  },
  {
    id: 5,
    image: "/new-car-5.png",
    name: "Aston Martin DB11 Volante",
    price: null,
    priceAMonth: "2,302",
    variantCount: 1,
    brandImage: "/ast-brand.png",
    brandName: "Wearnes Automotive",
    isWithCEO: false,
  },
  {
    id: 6,
    image: "/new-car-6.png",
    name: "Aston Martin DB11",
    price: "799,000",
    priceAMonth: "2,302",
    variantCount: 1,
    brandImage: "/ast-brand.png",
    brandName: "Wearnes Automotive ",
    isWithCEO: false,
  },
  {
    id: 7,
    image: "/new-car-7.png",
    name: "Aston Martin DB11 Volante",
    price: null,
    priceAMonth: "2,302",
    variantCount: 1,
    brandImage: "/ast-brand.png",
    brandName: "Wearnes Automotive ",
    isWithCEO: false,
  },
];

const NewCars = () => {
  return (
    <Flex direction="column">
      <Box px={4} py={2} w="full" overflowY="scroll">
        <Flex mb={6} display="inline-flex">
          {newCars.map((car) => (
            <Flex
              filter="drop-shadow(0px 0px 1px rgba(48, 49, 51, 0.05)) drop-shadow(0px 8px 16px rgba(48, 49, 51, 0.1))"
              w={280}
              h={352}
              mr={10}
              key={car.id}
              bg="white"
              direction="column"
              borderRadius="5px"
              overflow="hidden"
            >
              {car.advertisement ? (
                <Image src="/advertisement.png" alt="advertisement" />
              ) : (
                <>
                  <Image src={car.image} alt="new car" />
                  <Flex
                    p={4}
                    direction="column"
                    border="1px solid #E3E3E3"
                    borderBottomLeftRadius="5px"
                    borderBottomRightRadius="5px"
                    borderTop="none"
                  >
                    <Text mb={2} fontWeight="bold">
                      {car.name}
                    </Text>
                    <Flex mb={2}>
                      <Text mr={2}>
                        {car.price ? (
                          <>
                            From{" "}
                            <span style={{ color: "#0F5EDD" }}>
                              ${car.price}
                            </span>
                          </>
                        ) : (
                          "POA"
                        )}
                      </Text>
                      <Text fontSize={12} p="2px" bg="#E5EEFB" color="#0F5EDD">
                        ${car.priceAMonth}/mo
                      </Text>
                    </Flex>
                    <Flex mb={4} color="#5F5F5F" fontSize={14}>
                      <Text mr={1}>{car.variantCount} variants</Text>
                      {car.isWithCEO && <Text>| with COE</Text>}
                    </Flex>

                    <Flex alignItems="center" justifyContent="flex-start">
                      <Image mr={2} src={car.brandImage} alt="bmw-brand" />
                      <Text fontSize={14}>{car.brandName}</Text>
                    </Flex>
                  </Flex>
                </>
              )}
            </Flex>
          ))}
        </Flex>
      </Box>
      <Flex pr={4} pb="60px" w="full" justifyContent="flex-end">
        <Button variant="outline" colorScheme="red">
          View more new cars
        </Button>
      </Flex>
    </Flex>
  );
};

export default NewCars;
