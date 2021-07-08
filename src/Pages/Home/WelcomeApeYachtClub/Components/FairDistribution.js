import { Grid } from "@material-ui/core";
import classes from "../WelcomeApeYachtClub.module.css";
const FairDistribution = () => {
  return (
    <div>
      <h2 className={classes.fairHeading}>HIGHSTEAKS PRICING</h2>
      {/* <p className={classes.fairPara}>(BONDING CURVES ARE A PONZI)</p> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} lg={7}>
          <p className={classes.fairPara2}>
            The cost of an individual HighSteak is 25ADA. There are no price
            tiers.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default FairDistribution;
