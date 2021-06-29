import classes from "./WelcomeClub.module.css";
import GridImages from "./Components/GridImages";
const WelcomeClub = () => {
  return (
    <div className={classes.cMain}>
      <h1>WELCOME TO THE CLUB</h1>
      <p>
        When you buy a Bored Ape, you’re not simply buying an avatar or a
        provably-rare piece of art. You are gaining membership access to a club
        whose benefits and offerings will increase over time. Your Bored Ape can
        serve as your digital identity, and open digital doors for you.
      </p>
      <GridImages />
    </div>
  );
};
export default WelcomeClub;
