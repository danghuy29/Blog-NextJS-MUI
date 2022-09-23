import HomeContainer from "@src/container/Home";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
const Home: NextPageWithLayout = () => {
  return <HomeContainer />;
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
export default Home;
