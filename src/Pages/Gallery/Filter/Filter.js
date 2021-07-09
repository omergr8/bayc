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
      borderColor: "#789c3d",
    },
    "&:after": {
      borderColor: "#789c3d",
    },
    color: "#789c3d",
    fontSize: "13px",
  },
  inputField: {
    color: "#789c3d !important",
    "& .MuiInput": {
      color: "#789c3d !important",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#789c3d !important",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#789c3d !important",
    },
  },
  cssLabel: {
    color: "#789c3d",
  },

  cssOutlinedInput: {
    color: "#789c3d !important",
    "&$cssFocused $notchedOutline": {
      borderColor: `#789c3d !important`,
    },
  },

  cssFocused: {
    color: "#789c3d !important",
    borderColor: "#789c3d !important",
    borderBottom: "#789c3d !important",
  },

  notchedOutline: {
    borderWidth: "10px",
    color: "#789c3d !important",
    borderColor: "#789c3d !important",
  },
  icon: {
    fill: "#789c3d",
    color: "#789c3d !important",
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
  const [id, setId] = useState("");

  const classes2 = useStyles();
  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
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
    } else if (event.target.name === "id") {
      setId(event.target.value);
      setBackground("");
      setCharacter("");
      setMouth("");
      setRightHand("");
      setLeftHand("");
      setWrist("");
      setItem("");
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
    setId("");
  };
  React.useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={3} xs={12}>
          <div className={classes.cMain}>
            <h2>Rarities</h2>
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
            <FormControl className={classes2.formControl}>
              <TextField
                id="standard-number"
                label="BY ID"
                value={id}
                onChange={handleChange}
                name="id"
                type="number"
                className={classes2.inputField}
                InputLabelProps={{
                  classes: {
                    root: classes2.cssLabel,
                    focused: classes2.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes2.cssOutlinedInput,
                    focused: classes2.cssFocused,
                  },
                  inputMode: "numeric",
                }}
              />
            </FormControl>
            <Button
              className={classes.resetButton}
              onClick={resetFilter}
              variant="contained"
            >
              reset
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
            id={id}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Filter;
