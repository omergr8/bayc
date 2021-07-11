import classes from "../BakedHighsteaks.module.css";
import { Link } from "@material-ui/core";
const Banner = () => {
  return (
    <Link
      className={classes.anchorList2}
      href="https://buy.highsteaksnft.com/"
      target="_blank"
    >
      <div className={classes.banner}>
        <div className={classes.bannerText}>
          <h2>GET YOUR HIGHSTEAKS</h2>
        </div>
      </div>
    </Link>
  );
};
export default Banner;
