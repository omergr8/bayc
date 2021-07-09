import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Link,
  Button,
  NativeSelect,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link as RoterLink } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import discord from "../../../Assets/discord.png";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import logo from "../../../Assets/logo2.0.png";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoTitle: {
    width: "120px",

    [theme.breakpoints.up("sm")]: {
      width: "150px",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menu: {
    display: "flex",
    flexWrap: "wrap",
    listStyleType: "none",
  },
  anchorList: {
    display: "block",
    padding: "0px 15px",
    textDecoration: "none",
    color: "white !important",
    fontSize: "11px",
    textTransform: "uppercase",
    fontStyle: "italic",
  },
  anchorList2: {
    textDecoration: "none !important",
    color: "white !important",
  },
  menuButtonLink: {
    display: "block",
    padding: "0px 15px",
    textDecoration: "none",
    color: "white",
    fontWeight: "400",
    height: "0px",
    marginTop: "-1px",
    fontSize: "11px",
    textTransform: "uppercase",
    fontStyle: "italic",
  },
  menuLinks: {
    textTransform: "uppercase",
  },
  selectEmpty: {
    display: "block",
    padding: "0px 25px",
    textDecoration: "none",
    color: "white",
    fontSize: "11px",
    height: "0px",
    marginTop: "-4px",
    textTransform: "uppercase",
    fontStyle: "italic",
    backgroundColor: "black",
  },
  selectMobile: {
    display: "block",
    textDecoration: "none",
    color: "white",
    textTransform: "uppercase",
    fontStyle: "italic",
    backgroundColor: "black",
  },
  selectOptions: { backgroundColor: "black !important" },
  icon: {
    color: "white",
    padding: "0px 15px",
    marginTop: "11px",
  },
  iconMobile: {
    color: "white",
  },
  list: {
    width: 250,
    color: "white",
  },
  fullList: {
    width: "auto",
  },
  paper: {
    backgroundColor: "black",
  },
  mobileLogo: {
    textAlign: "center",
    textTransform: "uppercase",
  },
  linkIcon: {
    width: "30px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [members, setMembers] = React.useState("");
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const preventDefault = (event) => event.preventDefault();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    setMembers(event.target.value);
  };
  const iconsButton = (
    <>
      <Link href="https://discord.gg/c8qdzux5" target="_blank">
        <IconButton
          className={classes.linkIcon}
          aria-label="show 4 new mails"
          color="inherit"
        >
          <img src={discord} width="18px" alt="discordIcon" />
        </IconButton>
      </Link>
      <Link href="https://twitter.com/HighSteaksNft" target="_blank">
        <IconButton
          className={classes.linkIcon}
          aria-label="show 17 new notifications"
        >
          <TwitterIcon style={{ fontSize: 18, color: "white" }} />
        </IconButton>
      </Link>
    </>
  );

  const list = (
    <div className={classes.list}>
      <div className={classes.mobileLogo}>
        <Typography variant="h6" noWrap>
          <img width="150px" src={logo} alt="logo" />
        </Typography>
      </div>

      <List>
        <ListItem button>
          <Link
            className={classes.anchorList2}
            href="https://www.highsteaksnft.com/buy"
            target="_blank"
          >
            <ListItemText primary="BUY A STEAK" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemText primary="ROADMAP" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="CHARACTERS" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="RARITIES" />
        </ListItem>
      </List>
      <Divider />
      <div className="mobileLogo">{iconsButton}</div>
    </div>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <React.Fragment>
      <Drawer
        classes={{ paper: classes.paper }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {list}
      </Drawer>
    </React.Fragment>
  );
  const links = (
    <ul className={classes.menu}>
      <li>
        <Link
          className={classes.anchorList}
          href="https://www.highsteaksnft.com/buy"
          target="_blank"
        >
          BUY A STEAK
        </Link>
      </li>
      <li>
        <Link className={classes.anchorList} href="#" onClick={preventDefault}>
          roadmap
        </Link>
      </li>
      <li>
        <Link className={classes.anchorList} href="#" onClick={preventDefault}>
          CHARACTERS
        </Link>
      </li>
      <li>
        <RoterLink className={classes.anchorList} to="/gallery">
          RARITIES
        </RoterLink>
      </li>
    </ul>
  );
  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <RoterLink to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              <img className={classes.logoTitle} src={logo} alt="logo" />
            </Typography>
          </RoterLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {links}
            {iconsButton}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
