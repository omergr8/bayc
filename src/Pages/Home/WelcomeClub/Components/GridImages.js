import classes from "../WelcomeClub.module.css";
import Grid from "@material-ui/core/Grid";
import img1 from "../../../../Assets/img1.png";
import img2 from "../../../../Assets/img2.png";
import img3 from "../../../../Assets/img3.png";
import img4 from "../../../../Assets/img4.png";
import img5 from "../../../../Assets/img5.png";

const GridImages = () => {
  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.img}>
          <img width="100px" height="140px" src={img1} alt="img1" />
          <p>10,000 Provably-rare Bored Ape tokens</p>
        </div>
        <div className={classes.img}>
          <img width="100px" height="140px" src={img2} alt="img2" />
          <p>Fair Launch, fair distribution: All apes cost 0.08 ETH</p>
        </div>
        <div className={classes.img}>
          <img width="100px" height="140px" src={img3} alt="img3" />
          <p>
            Ownership and commercial usage rights given to the consumer over
            their NFT
          </p>
        </div>
        <div className={classes.img}>
          <img width="100px" height="140px" src={img4} alt="img4" />
          <p>The Bathroom: A member's-only graffiti board</p>
        </div>
        <div className={classes.img}>
          <img width="100px" height="140px" src={img5} alt="img5" />
          <p>Gain additional benefits through roadmap activations</p>
        </div>
      </div>
    </div>
  );
};
export default GridImages;
