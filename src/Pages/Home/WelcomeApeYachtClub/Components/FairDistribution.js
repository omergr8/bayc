import { Grid } from "@material-ui/core";
import classes from "../WelcomeApeYachtClub.module.css";
const FairDistribution = () => {
  return (
    <div>
      <h2 className={classes.fairHeading}>FAIR DISTRIBUTION</h2>
      <p className={classes.fairPara}>(BONDING CURVES ARE A PONZI)</p>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} lg={7}>
          <p className={classes.fairPara2}>
            There are no bonding curves here. Buying a Bored Ape costs 0.08 ETH.
            There are no price tiers; BAYC membership costs the same for
            everyone.
          </p>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <span className={classes.fairSpan}>
            Note: Thirty apes are being withheld from the sale. These will be
            used for giveaways, puzzle rewards—and for the creators' BAYC
            memberships.
          </span>
        </Grid>
      </Grid>
    </div>
  );
};
export default FairDistribution;
