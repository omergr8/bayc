import { Divider } from "@material-ui/core";
import Hero from "./Hero/Hero";
import WelcomeApeYachtClub from "./WelcomeApeYachtClub/WelcomeApeYachtClub";
import Specs from "./Specs/Specs";
import WelcomeClub from "./WelcomeClub/WelcomeClub";
import Bathroom from "./Bathroom/Bathroom";
import Roadmap from "./Roadmap/Roadmap";
import CommunityTools from "./CommunityTools/CommunityTools";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomeApeYachtClub />
      <Divider classes={{ root: "divider" }} />
      <Specs />
      <Divider classes={{ root: "divider" }} />
      <WelcomeClub />
      <Divider classes={{ root: "divider" }} />
      <Bathroom />
      <Divider classes={{ root: "divider" }} />
      <Roadmap />
      <Divider classes={{ root: "divider" }} />
      <CommunityTools />
      <Divider classes={{ root: "divider" }} />
      <Team />
    </div>
  );
};
export default Home;
