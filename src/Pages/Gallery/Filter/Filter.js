import React, { useState } from "react";
import classes from "./Filter.module.css";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";
import GalleryImages from "../GalleryImages/GalleryImages";
import {
  characterr,
  backgroundd,
  mouthh,
  rightHandd,
  leftHandd,
  wristt,
  itemm,
} from "../../../Constants/FilterOptions";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  select: {
    "&:before": {
      borderColor: "#BFC500",
    },
    "&:after": {
      borderColor: "#BFC500",
    },
    color: "#BFC500",
    fontSize: "13px",
  },
  inputField: {
    "& .MuiInput-underline:before": {
      borderBottomColor: "#BFC500 !important",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#BFC500 !important",
    },
  },
  cssLabel: {
    color: "#BFC500",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `#BFC500 !important`,
    },
  },

  cssFocused: {
    color: "#BFC500 !important",
    borderColor: "#BFC500 !important",
    borderBottom: "#BFC500 !important",
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#BFC500 !important",
  },
  icon: {
    fill: "#BFC500",
  },
  formControl: {
    minWidth: 180,
    marginLeft: "0px",
    marginBottom: "15px",
  },
  formControl2: {
    minWidth: 180,
    marginLeft: "0px",
    marginBottom: "0px",
  },
}));
const Filter = () => {
  const [background, setBackground] = useState("");
  const [character, setCharacter] = useState("");
  const [mouth, setMouth] = useState("");
  const [righthand, setRightHand] = useState("");
  const [lefthand, setLeftHand] = useState("");
  const [wrist, setWrist] = useState("");
  const [item, setItem] = useState("");
  console.log(character);
  const classes2 = useStyles();
  const handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "background") {
      setBackground(event.target.value);
    } else if (event.target.name === "character") {
      setCharacter(event.target.value);
    } else if (event.target.name === "mouth") {
      setMouth(event.target.value);
    } else if (event.target.name === "righthand") {
      setRightHand(event.target.value);
    } else if (event.target.name === "lefthand") {
      setLeftHand(event.target.value);
    } else if (event.target.name === "wrist") {
      setWrist(event.target.value);
    } else if (event.target.name === "item") {
      setItem(event.target.value);
    }
  };
  const resetFilter = () => {
    setBackground("");
    setCharacter("");
    setMouth("");
    setRightHand("");
    setLeftHand("");
    setWrist("");
    setItem("");
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={3} xs={12}>
          <div className={classes.cMain}>
            <h2>Gallery</h2>
            <FormControl className={classes2.formControl}>
              <Select
                value={character}
                onChange={handleChange}
                name="character"
                displayEmpty
                className={classes2.select}
                inputProps={{
                  classes: {
                    icon: classes2.icon,
                  },
                }}
              >
                <MenuItem value="" disabled>
                  CHARACTER
                </MenuItem>
                {characterr.map((ch, index) => (
                  <MenuItem key={index} value={ch}>
                    {ch}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes2.formControl}>
              <Select
                value={background}
                onChange={handleChange}
                name="background"
                displayEmpty
                className={classes2.select}
                inputProps={{
                  classes: {
                    icon: classes2.icon,
                  },
                }}
              >
                <MenuItem value="" disabled>
                  BACKGROUND
                </MenuItem>
                {backgroundd.map((bg, index) => (
                  <MenuItem key={index} value={bg}>
                    {bg}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={classes2.formControl}>
              <Select
                value={mouth}
                onChange={handleChange}
                name="mouth"
                displayEmpty
                className={classes2.select}
                inputProps={{
                  classes: {
                    icon: classes2.icon,
                  },
                }}
              >
                <MenuItem value="" disabled>
                  MOUTH
                </MenuItem>
                <MenuItem value="None">None</MenuItem>
                {mouthh.map((mouth, index) => (
                  <MenuItem key={index} value={mouth}>
                    {mouth}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes2.formControl}>
              <Select
                value={righthand}
                onChange={handleChange}
                name="righthand"
                displayEmpty
                className={classes2.select}
                inputProps={{
                  classes: {
                    icon: classes2.icon,
                  },
                }}
              >
                <MenuItem value="" disabled>
                  RIGHT HAND
                </MenuItem>
                <MenuItem value="None">None</MenuItem>
                {rightHandd.map((rh, index) => (
                  <MenuItem key={index} value={rh}>
                    {rh}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes2.formControl}>
              <Select
                value={lefthand}
                onChange={handleChange}
                name="lefthand"
                displayEmpty
                className={classes2.select}
                inputProps={{
                  classes: {
                    icon: classes2.icon,
                  },
                }}
              >
                <MenuItem value="" disabled>
                  LEFT HAND
                </MenuItem>
                <MenuItem value="None">None</MenuItem>
                {leftHandd.map((lh, index) => (
                  <MenuItem key={index} value={lh}>
                    {lh}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes2.formControl}>
              <Select
                value={wrist}
                onChange={handleChange}
                name="wrist"
                displayEmpty
                className={classes2.select}
                inputProps={{
                  classes: {
                    icon: classes2.icon,
                  },
                }}
              >
                <MenuItem value="" disabled>
                  WRIST
                </MenuItem>
                <MenuItem value="None">None</MenuItem>
                {wristt.map((wrist, index) => (
                  <MenuItem key={index} value={wrist}>
                    {wrist}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes2.formControl}>
              <Select
                value={item}
                onChange={handleChange}
                name="item"
                displayEmpty
                className={classes2.select}
                inputProps={{
                  classes: {
                    icon: classes2.icon,
                  },
                }}
              >
                <MenuItem value="" disabled>
                  ITEM
                </MenuItem>
                <MenuItem value="None">None</MenuItem>
                {itemm.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              className={classes.resetButton}
              onClick={resetFilter}
              variant="contained"
            >
              reset filters
            </Button>
          </div>
        </Grid>
        <Grid item lg={9} xs={12}>
          <GalleryImages
            background={background}
            character={character}
            mouth={mouth}
            righthand={righthand}
            lefthand={lefthand}
            wrist={wrist}
            item={item}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Filter;
