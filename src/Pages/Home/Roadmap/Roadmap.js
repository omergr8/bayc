import classes from "./Roadmap.module.css";
import Grid from "@material-ui/core/Grid";
import List from "./Components/List";
import shirt from "../../../Assets/shirt.png";
const Roadmap = () => {
  return (
    <div className={classes.cMain}>
      <h1>ROADMAP ACTIVATIONS</h1>
      <p>We’re in this for the long haul.</p>
      <p>
        We’ve set up some goalposts for ourselves. Once we hit a target sell
        through percentage, we will begin to work on realizing the stated goal.
      </p>
      <Grid container spacing={0}>
        <Grid item xl={8} md={8} xs={12}>
          <List />
        </Grid>
        <Grid item xl={4} md={4} xs={12}>
          <div className={classes.shirtBackground}>
            <img src={shirt} width="360" height="350" alt="shirt" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Roadmap;
