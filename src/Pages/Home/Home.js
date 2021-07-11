import { Divider } from "@material-ui/core";
import Hero from "./Hero/Hero";
import BakedHighsteaks from "./BakedHighsteaks/BakedHighsteaks";
import Roadmap from "./Roadmap/Roadmap";
import Faq from "./Faq/Faq";
import Characters from "./Characters/Characters";
import { Element } from "react-scroll";
const Home = () => {
  return (
    <div>
      <Hero />
      <BakedHighsteaks />
      <Divider classes={{ root: "divider" }} />
      <Element id="roadmap" name="roadmap">
        <Roadmap id="roadmap" />
      </Element>
      <Divider classes={{ root: "divider" }} />
      <Element id="characters" name="characters">
        <Characters id="characters" />
      </Element>
      <Divider classes={{ root: "divider" }} />
      <Faq />
    </div>
  );
};
export default Home;
