import React from "react";
import { Grid, Divider } from "@material-ui/core";
import classes from "./WelcomeApeYachtClub.module.css";
import FairDistribution from "./Components/FairDistribution";
import Banner from "./Components/Banner";
import f1 from "../../../Assets/f1.png";
import f2 from "../../../Assets/f2.png";
import f3 from "../../../Assets/f3.png";
import f4 from "../../../Assets/f4.png";
const tileData = [
  {
    img: f1,
  },
  {
    img: f2,
  },
  {
    img: f3,
  },
  {
    img: f4,
  },
];
const WelcomeApeYachtClub = () => {
  return (
    <>
      <div className={classes.cMain}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={7} lg={7}>
            {/* <h1 className={classes.heading1}>WELCOME TO THE</h1>{" "}
            <h1 className={classes.heading2}>BORED APE YACHT CLUB</h1> */}
            <h1 className={classes.heading1}>
              WELCOME TO THE <br /> BORED APE YACHT CLUB
            </h1>
            <p>
              BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
              collectibles living on the Ethereum blockchain. Your Bored Ape
              doubles as your Yacht Club membership card, and grants access to
              members-only benefits, the first of which is access to THE
              BATHROOM, a collaborative graffiti board. Future areas and perks
              can be unlocked by the community through roadmap activation.
            </p>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Grid container spacing={1}>
              {tileData.map((tile) => (
                <Grid item xs={6} key={tile.img}>
                  {" "}
                  <img width="80%" src={tile.img} alt={tile.title} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <FairDistribution />
        <Banner />
      </div>
    </>
  );
};

export default WelcomeApeYachtClub;
