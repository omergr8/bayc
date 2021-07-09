import { Divider } from "@material-ui/core";
import Hero from "./Hero/Hero";
import WelcomeApeYachtClub from "./WelcomeApeYachtClub/WelcomeApeYachtClub";
import Roadmap from "./Roadmap/Roadmap";
import Faq from "./Faq/Faq";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomeApeYachtClub />
      <Divider classes={{ root: "divider" }} />
      <Roadmap />
      <Divider classes={{ root: "divider" }} />
      <Team />
      <Divider classes={{ root: "divider" }} />
      <Faq />
    </div>
  );
};
export default Home;
