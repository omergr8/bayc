import classes from "./Bathroom.module.css";
import Grid from "@material-ui/core/Grid";
import bathroomImage from "../../../Assets/bathroom.png";
const Bathroom = () => {
  return (
    <div className={classes.cMain}>
      <Grid container spacing={3}>
        <Grid item xl={8} md={8} xs={12}>
          <h1>THE BATHROOM</h1>
          <p>
            The BAYC Bathroom will become operational once the presale period is
            over. It contains a canvas accessible only to wallets containing at
            least one ape. Like any good dive bar bathroom, this is the place to
            draw, scrawl, or write expletives.
          </p>
          <p>
            Each ape-holder will be able to paint a pixel on the bathroom wall
            every fifteen minutes. Think of it as a collaborative art experiment
            for the cryptosphere. A members-only canvas for the discerning minds
            of crypto twitter.
          </p>
          <p>We're pretty sure it's going to be full of dicks.</p>
        </Grid>
        <Grid className={classes.gridImage} item xl={4} md={4} xs={12}>
          <img src={bathroomImage} alt="bathroom" width="70%" />
        </Grid>
      </Grid>
    </div>
  );
};
export default Bathroom;
