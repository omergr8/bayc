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
              GET BAKED WITH <br /> THESE HIGHSTEAKS
            </h1>
            <p>
              HighSteaks consists of 5000 limited edition NFT digital
              collectibles living on the Cardano Blockchain. Each HighSteak
              character has a backstory to tell and a unique personality that's
              designed to be both fun and artistic. The characters, backgrounds,
              and accessories are carefully designed and randomized using an
              algorithm which produces random and completely unique NFT
              artworks.
            </p>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            {/* <Grid container spacing={1}>
              {tileData.map((tile) => (
                <Grid item xs={6} key={tile.img}>
                  {" "}
                  <img width="80%" src={tile.img} alt={tile.title} />
                </Grid>
              ))}
            </Grid> */}
            <img
              src="https://res.cloudinary.com/de1v32nv0/image/upload/v1625739561/High%20steaks/meat_collection_c9u3rr.jpg"
              alt="meat"
              width="100%"
            />
          </Grid>
        </Grid>
        <FairDistribution />
        <Banner />
      </div>
    </>
  );
};

export default WelcomeApeYachtClub;
