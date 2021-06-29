import classes from "../WelcomeApeYachtClub.module.css";
import { Grid, Button } from "@material-ui/core";
const Banner = () => {
  return (
    <div className={classes.banner}>
      <Grid
        className={classes.grid}
        container
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={4} lg={4}>
          <h2>BUY AN APE</h2>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <p>
            The initial sale has sold out. To get your Bored Ape, check out the
            collection on OpenSea.
          </p>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div>
            {" "}
            <Button className={classes.buyButton} variant="contained">
              buy an ape on opensea
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Banner;
