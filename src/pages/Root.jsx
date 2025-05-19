import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header logo="Mai Tran"></Header>
      <main>
        <Outlet />
      </main>
      <Footer year={2025}></Footer>
    </>
  );
};

export default Root;
