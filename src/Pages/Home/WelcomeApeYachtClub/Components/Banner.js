import classes from "../WelcomeApeYachtClub.module.css";
import { Grid, Button, Link } from "@material-ui/core";
const Banner = () => {
  return (
    <Link
      className={classes.anchorList2}
      href="https://www.highsteaksnft.com/buy"
      target="_blank"
    >
      <div className={classes.banner}>
        <div className={classes.bannerText}>
          <h2>GET YOUR HIGHSTEAKS</h2>
        </div>

        {/* <Grid
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
      </Grid> */}
      </div>
    </Link>
  );
};
export default Banner;
