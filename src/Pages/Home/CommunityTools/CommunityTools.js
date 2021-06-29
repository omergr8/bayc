import classes from "./CommunityTools.module.css";
import { Grid, Button } from "@material-ui/core";

const CommunityTools = () => {
  return (
    <div className={classes.cMain}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xl={8} md={8} xs={12}>
          <h1>COMMUNITY TOOLS</h1>
          <p>
            Here are some helpful tools created by the Bored Ape Yacht Club
            community. Please note that these are unofficial in nature. Every
            assignment of an ape's overall value or rarity is inherently
            subjective.
          </p>
        </Grid>
        <Grid className={classes.buttonGrid} item xl={4} md={4} xs={12}>
          <div>
            <Button className={classes.button} variant="contained">
              nftexp.io
            </Button>
          </div>
          <div>
            <Button className={classes.button} variant="contained">
              rarity.tools
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default CommunityTools;
