import React from "react";
import { Grid, Link } from "@material-ui/core";
import classes from "./Team.module.css";
import t1 from "../../../Assets/t1.png";
import t2 from "../../../Assets/t2.png";
import t3 from "../../../Assets/t3.png";
import t4 from "../../../Assets/t4.png";
const tileData = [
  {
    img: t1,
  },
  {
    img: t2,
  },
  {
    img: t3,
  },
  {
    img: t4,
  },
];
const WelcomeApeYachtClub = () => {
  return (
    <>
      <div className={classes.cMain}>
        <Grid container spacing={3}>
          <Grid item xl={7} md={7} xs={12}>
            <h1 className={classes.heading1}>THE TEAM</h1>
            <p>
              BAYC was created by four friends who set out to make some dope
              apes, test our skills, and try to build something (ridiculous).
            </p>
            <p>
              <span>GARGAMEL</span>. STARCRAFT OBSESSED. EATS SMURFS.
            </p>
            <p>
              <span>GORDON GONER</span>. REFORMED LEVERAGE ADDICT.
            </p>
            <p>
              <span>EMPEROR TOMATO KETCHUP</span>. SPENT ALL THEIR MONEY ON
              FIRST PRESSES AND PET-NAT.
            </p>
            <p>
              <span>NO SASS</span>. HERE FOR THE APES. NOT FOR THE SASS.
            </p>
          </Grid>
          <Grid item xl={5} md={5} xs={12}>
            <Grid className={classes.gridImage} container spacing={0}>
              {tileData.map((tile) => (
                <Grid item xs={6} key={tile.img}>
                  {" "}
                  <img width="80%" src={tile.img} alt={tile.title} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.teamFooter}>
        <span>
          VERIFIED SMART CONTRACT ADDRESS: &nbsp;
          <Link className={classes.link} href="!">
            0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
          </Link>{" "}
        </span>
      </div>
    </>
  );
};

export default WelcomeApeYachtClub;
