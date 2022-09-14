import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Banner from "../components/banner";
import CopyRight from "../components/copyRight";
import Explain from "../components/explain";
import FeaturedVehicles from "../components/featuredVehicles";
import Footer from "../components/footer";
import Header from "../components/header";
import NewCars from "../components/newCars";
import Question from "../components/question";
import Search from "../components/search";

const Home = () => {
  return (
    <Flex direction="column" w="full">
      <Header />
      <Banner />
      <Search />
      <NewCars />
      <Explain />
      <FeaturedVehicles />
      <Question />
      <Footer />
      <CopyRight />
    </Flex>
  );
};

export default Home;
