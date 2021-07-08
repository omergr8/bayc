import classes from "./Roadmap.module.css";
import Grid from "@material-ui/core/Grid";
import List from "./Components/List";
import shirt from "../../../Assets/shirt.png";
const Roadmap = () => {
  return (
    <div className={classes.cMain}>
      <h1>ROADMAP</h1>

      <p>
        HighSteaks NFT currently remains as a collection of fun and witty art
        pieces. We are however exploring the options of creating a comic book
        series that dives deeper into the storylines of the steaks and all the
        risky adventures they encounter as a group. Another idea is to create a
        fighting game called "Beat the Meat". Both options will only be explore
        if the project sells 100% of the NFTs
      </p>
      {/* <Grid container spacing={0}>
        <Grid item xl={8} md={8} xs={12}>
          <List />
        </Grid>
        <Grid item xl={4} md={4} xs={12}>
          <div className={classes.shirtBackground}>
            <img src={shirt} width="360" height="350" alt="shirt" />
          </div>
        </Grid>
      </Grid> */}
    </div>
  );
};
export default Roadmap;
