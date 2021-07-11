import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./BakedHighsteaks.module.css";
import HighsteakPricing from "./Components/HighsteakPricing";
import Banner from "./Components/Banner";

const BakedHighsteaks = () => {
  return (
    <>
      <div className={classes.cMain}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={7} lg={7}>
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
            <img
              src="https://res.cloudinary.com/de1v32nv0/image/upload/v1625739561/High%20steaks/meat_collection_c9u3rr.jpg"
              alt="meat"
              width="100%"
            />
          </Grid>
        </Grid>
        <HighsteakPricing />
        <Banner />
      </div>
    </>
  );
};

export default BakedHighsteaks;
