import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Banner from "../components/banner";
import Explain from "../components/explain";
import Header from "../components/header";
import NewCars from "../components/newCars";
import Search from "../components/search";

const Home = () => {
  return (
    <Flex direction="column" w="full">
      <Header />
      <Banner />
      <Search />
      <NewCars />
      <Explain />
    </Flex>
  );
};

export default Home;
