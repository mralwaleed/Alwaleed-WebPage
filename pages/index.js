import Layout from "@/src/layout/Layout";
import About from "components/About";
import Contact from "components/Contact";
import Home from "components/Home";
import News from "components/News";
import Expertise from "components/Service";
import dynamic from "next/dynamic";
const Achievements = dynamic(() => import("components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* EXPERTISE */}
      <Expertise />
      {/* /EXPERTISE */}
      <div className="tokyo_tm_portfolio_titles" />
      {/* ACHIEVEMENTS */}
      <Achievements />
      {/* /ACHIEVEMENTS */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </Layout>
  );
};
export default Index;
