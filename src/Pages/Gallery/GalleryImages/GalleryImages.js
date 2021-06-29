import React, { useState, useEffect } from "react";
import classes from "./GalleryImages.module.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { imagesList } from "../../../Constants/Image";
import { filterGalleryImages } from "../../../Constants/FilterGalleryImages";
// import f3 from "../../../../public";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const GalleryImages = (props) => {
  //   const classes = useStyles();
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(20);
  const [hasmore, setHasmore] = useState(true);
  const [imagelist, setImageList] = useState(imagesList);
  const [items, setItems] = useState(imagelist.slice(initial, final));
  useEffect(() => {
    const filteredImages = filterGalleryImages(props);
    console.log("props effect", filteredImages);
    setInitial(0);
    setFinal(20);
    if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      setItems(imagesList.slice(0, 20));
      setHasmore(true);
    } else {
      setItems(filteredImages.slice(initial, final));
      setImageList(filteredImages);
    }
  }, [props]);
  useEffect(() => {
    setItems(imagesList.slice(initial, final));
  }, []);
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    let initialC = initial;
    let finalC = final;
    setInitial(initialC + 20);
    setFinal(finalC + 20);
    console.log(imagelist, initialC, finalC);
    if (items.length === imagelist.length) {
      setHasmore(false);
    }
    setTimeout(() => {
      setItems(items.concat(imagelist.slice(initialC + 20, finalC + 20)));
    }, 1500);
  };

  return (
    <div>
      <InfiniteScroll
        className={classes.grid}
        dataLength={items.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={hasmore}
        loader={<h4 style={{ color: "white" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center", color: "white" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid container className={classes.grid} spacing={3}>
          {items.map((image, index) => (
            <Grid item lg={4} md={6} xs={12}>
              <img
                src={process.env.PUBLIC_URL + `/Gallery/${image.name}`}
                width="100%"
                alt="Galleryimage"
              />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};
export default GalleryImages;
