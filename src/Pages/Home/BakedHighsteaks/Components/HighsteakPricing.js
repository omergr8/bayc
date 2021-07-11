import { Grid } from "@material-ui/core";
import classes from "../BakedHighsteaks.module.css";
const HighsteakPricing = () => {
  return (
    <div>
      <h2 className={classes.fairHeading}>HIGHSTEAKS PRICING</h2>
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
export default HighsteakPricing;
