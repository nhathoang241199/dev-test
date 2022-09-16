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
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Flex
        display={{ base: "none", lg: "flex" }}
        direction="column"
        bg="#F1F1F1"
        px={90}
        py="40px"
        mt={20}
      >
        <Text mb={4} color="5F5F5F" fontWeight={600}>
          UCARS - Revolutionizing The Online Car Marketplace In Singapore
        </Text>
        <Text fontSize={12} fontWeight={600} color="5F5F5F">
          Buy Used And New Cars Online
        </Text>
        <Text mb={8} fontSize={12}>
          Start your car buying journey with UCARS as we connect you seamlessly
          to the industry&apos;s best CaseTrust-SVTA accredited car dealerships.
          As a one stop car online portal you can now buy your new ride, be it a
          pre-owned car or a brand new car from trusted dealers all over
          Singapore, all in one place. Our ever expanding listing of quality and
          covet-worthy cars, new and second hand, from both owners and trusted
          car dealers, will leave you spoilt for choice. Refine your search by
          vehicle type, registration year, price, mileage, engine type,
          transmission, annual depreciation value and more to find the car that
          best suits your needs, taste and lifestyle. You can even search for
          your car by dealer or directly by owner.
        </Text>

        <Text fontSize={12} fontWeight={600} color="5F5F5F">
          Sell Your Car In An Instant With Confidence
        </Text>
        <Text mb={8} fontSize={12}>
          We all know how selling a car in Singapore can be a daunting task
          especially for a first time car seller; from trying to get a valuation
          for your car, finding a trusted dealer, to getting the best quote on
          your vehicle. UCARS understands the hassle and even the costs involved
          and have as such partnered with Huawei to develop a FIRST in Southeast
          Asia AI car valuation tool that is able to provide a car’s resale
          value at the snap of a finger. Backed with a consortium of trusted
          CaseTrust-SVTA accredited car dealers you can be assured that you are
          getting the best price for your vehicle and do not have to worry about
          any hidden costs.
        </Text>
        <Text fontSize={12} fontWeight={600} color="5F5F5F">
          The Ultimate Car Shopping Experience Online
        </Text>
        <Text fontSize={12}>
          UCARS platform is the first of its kind to be backed by Huawei’s
          Artificial Intelligence and cloud computing, enabling it to be able to
          offer users transparency and enhanced security, all with the one aim
          of enhancing customer experience. So come on over to buy and sell used
          cars online at the best prices at UCARS Singapore. Connect easily with
          dealers in real-time via our online video call feature, or schedule a
          test drive when you&apos;re ready. Have some questions? Get them
          answered instantly with our chatbot moderated by our responsive team.
          Stay in the loop with our car-related tips, reviews and news. Learn
          the ins-and-outs of your car, as well as global and Singapore’s car
          updates at your own pace.
        </Text>
      </Flex>
      <Flex
        display={{ base: "flex", lg: "none" }}
        direction="column"
        py={6}
        px={4}
      >
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
          Get the <span style={{ color: "#EE1B24" }}>latest</span> automotive
          news sent to your inbox!
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
          <Flex alignItems="center">
            <Icon w={4} h={4} mr={2} color="#232323" as={AiOutlineInstagram} />
            <Icon w={4} h={4} mr={2} color="#232323" as={FaFacebookF} />
            <Icon w={4} h={4} mr={2} color="#232323" as={FaTelegramPlane} />
            <Icon w={4} h={4} mr={2} color="#232323" as={ImLinkedin2} />
            <Icon w={4} h={4} mr={2} color="#232323" as={AiFillYoutube} />
          </Flex>
        </Flex>

        <Flex alignItems="center">
          <Image
            mr={2}
            h="16px"
            w={58}
            src="/ucars-logo.png"
            alt="ucars-logo"
          />
          <Text flex={1} textAlign="center" fontSize={10}>
            CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
            by UCARS Pte Ltd
          </Text>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        display={{ base: "none", lg: "flex" }}
        px={114}
        py="52px"
      >
        <Flex
          mb={12}
          justifyContent="space-between"
          borderBottom="1px solid #F1F2F5"
        >
          <Flex mr={8} direction="column">
            <Image w={300} h="62px" src="/desktop-footer-logo.png" alt="logo" />
            <Flex mt={4}>
              <Icon color="#232323" as={RiMapPinFill} />
              <Text ml={2} textAlign="left" flex={1} fontSize={12}>
                71 Ayer Rajah Crescent, #06-14, Singapore 139951
              </Text>
            </Flex>
            <Flex mt={4}>
              <Icon color="#232323" as={AiFillPhone} />
              <Text ml={2} textAlign="left" flex={1} fontSize={12}>
                +65 8808 7905
              </Text>
            </Flex>
            <Flex pb={5} mt={4}>
              <Icon color="#232323" as={AiFillMail} />
              <Text
                cursor="pointer"
                _hover={{
                  opacity: 0.8,
                }}
                ml={2}
                textAlign="left"
                flex={1}
                fontSize={12}
              >
                hello@carbuyer.com.sg
              </Text>
            </Flex>
          </Flex>
          <Flex mr={8} direction="column">
            <Text color="#232323" fontWeight={600}>
              Services
            </Text>
            <Text
              cursor="pointer"
              _hover={{
                opacity: 0.8,
              }}
              mt={2}
              color="#5F5F5F"
              fontSize={14}
            >
              Buy Used Cars
            </Text>
            <Text
              cursor="pointer"
              _hover={{
                opacity: 0.8,
              }}
              mt={2}
              color="#5F5F5F"
              fontSize={14}
            >
              Buy New Cars
            </Text>
            <Text
              cursor="pointer"
              _hover={{
                opacity: 0.8,
              }}
              mt={2}
              color="#5F5F5F"
              fontSize={14}
            >
              Be a Dealer with UCARS
            </Text>
          </Flex>
          <Flex mr={8} direction="column">
            <Text color="#232323" fontWeight={600}>
              Resources
            </Text>
            <Text
              cursor="pointer"
              _hover={{
                opacity: 0.8,
              }}
              mt={2}
              color="#5F5F5F"
              fontSize={14}
            >
              News
            </Text>
            <Text
              cursor="pointer"
              _hover={{
                opacity: 0.8,
              }}
              mt={2}
              color="#5F5F5F"
              fontSize={14}
            >
              Sell My Car
            </Text>
            <Text
              cursor="pointer"
              _hover={{
                opacity: 0.8,
              }}
              mt={2}
              color="#5F5F5F"
              fontSize={14}
            >
              COE Prices
            </Text>
          </Flex>
          <Flex mr={8} direction="column">
            <Text color="#232323" fontWeight={600}>
              About
            </Text>
            <Text
              cursor="pointer"
              _hover={{
                opacity: 0.8,
              }}
              mt={2}
              color="#5F5F5F"
              fontSize={14}
            >
              About Us
            </Text>
            <Text
              cursor="pointer"
              _hover={{
                opacity: 0.8,
              }}
              mt={2}
              color="#5F5F5F"
              fontSize={14}
            >
              Contact Us
            </Text>
            <Text
              cursor="pointer"
              _hover={{
                opacity: 0.8,
              }}
              mt={2}
              color="#5F5F5F"
              fontSize={14}
            >
              Careers
            </Text>
          </Flex>
          <Flex direction="column">
            <Text mb={2} fontSize={14}>
              Get the <span style={{ color: "#EE1B24" }}>latest</span>{" "}
              automotive news sent to your inbox!
            </Text>

            <Flex mb={5}>
              <Input
                borderRadius="5px 0px 0px 5px"
                h="40px"
                px={4}
                py="10px"
                placeholder="Enter your email"
                border="1px solid #F3F3F3"
                fontSize={14}
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
                <Text fontSize={14} fontWeight={600} color="white">
                  Subscribe
                </Text>
              </Button>
            </Flex>

            <Flex mb={5}>
              <Text fontSize={14} mr={9}>
                Follow us
              </Text>
              <Flex alignItems="center">
                <Icon
                  cursor="pointer"
                  _hover={{
                    opacity: 0.8,
                  }}
                  w={4}
                  h={4}
                  mr={2}
                  color="#232323"
                  as={AiOutlineInstagram}
                />
                <Icon
                  cursor="pointer"
                  _hover={{
                    opacity: 0.8,
                  }}
                  w={4}
                  h={4}
                  mr={2}
                  color="#232323"
                  as={FaFacebookF}
                />
                <Icon
                  cursor="pointer"
                  _hover={{
                    opacity: 0.8,
                  }}
                  w={4}
                  h={4}
                  mr={2}
                  color="#232323"
                  as={FaTelegramPlane}
                />
                <Icon
                  cursor="pointer"
                  _hover={{
                    opacity: 0.8,
                  }}
                  w={4}
                  h={4}
                  mr={2}
                  color="#232323"
                  as={ImLinkedin2}
                />
                <Icon
                  cursor="pointer"
                  _hover={{
                    opacity: 0.8,
                  }}
                  w={4}
                  h={4}
                  mr={2}
                  color="#232323"
                  as={AiFillYoutube}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex mb={5} justifyContent="space-between">
          <Text fontSize={14} color="#232323">
            Advertising Terms and Conditions Platform Terms and Conditions
            Privacy Policy
          </Text>
          <Text fontSize={14} color="#8C8C8C">
            © 2022. All rights reserved.
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Image
            mr={2}
            h="16px"
            w="56px"
            src="/ucars-logo.png"
            alt="ucars-logo"
          />
          <Text flex={1} textAlign="left" fontSize={12} color="#5F5F5F">
            CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
            by UCARS Pte Ltd
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
