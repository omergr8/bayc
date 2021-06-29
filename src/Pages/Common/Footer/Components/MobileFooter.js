import classes from "../Footer.module.css";
import { Grid, Link, IconButton, Button } from "@material-ui/core";
import footerLogo from "../../../../Assets/footerLogo.png";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import discord from "../../../../Assets/discord.png";
import { Divider } from "@material-ui/core";
const MobileFooter = () => {
  const iconsButton = (
    <>
      <IconButton
        style={{ width: "35px" }}
        aria-label="show 4 new mails"
        color="inherit"
      >
        <YouTubeIcon style={{ fontSize: 17 }} />
      </IconButton>
      <IconButton
        style={{ width: "35px" }}
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <InstagramIcon style={{ fontSize: 17 }} />
      </IconButton>
      <IconButton
        style={{ width: "35px" }}
        aria-label="show 4 new mails"
        color="inherit"
      >
        <img src={discord} width="17px" alt="discordIcon" />
      </IconButton>
      <IconButton
        style={{ width: "35px" }}
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <TwitterIcon style={{ fontSize: 17 }} />
      </IconButton>
    </>
  );
  return (
    <div className={classes.mainMobile}>
      <div className={classes.footerBorder}>
        <Divider classes={{ root: classes.divider2 }} />
      </div>
      <div className={classes.mobileFlex}>
        <div className={classes.mobileImage}>
          <img src={footerLogo} alt="footerLogo.png" width="200px" />
        </div>
        <div className={classes.mobileInput}>
          <h3>GET ON THE LIST</h3>
          <input className={classes.input1} type="text" />
          <IconButton
            className={classes.input2}
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <ArrowRightAltIcon style={{ fontSize: 18 }} />
          </IconButton>
        </div>
        <div className={classes.mobileIcons}>{iconsButton}</div>
        <div className={classes.mobileFooterText}>
          <h5>© 2021 Yuga Labs LLC</h5>
          <h5 className={classes.terms}>
            <Link href="!">Terms & Conditions</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default MobileFooter;
