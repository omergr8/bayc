import React, { useState, useEffect } from "react";
import classes from "./GalleryImages.module.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { imagesList } from "../../../Constants/Image";
import { filterGalleryImages } from "../../../Constants/FilterGalleryImages";

const GalleryImages = (props) => {
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(20);
  const [hasmore, setHasmore] = useState(true);
  const [imagelist, setImageList] = useState(imagesList);
  const [items, setItems] = useState(imagelist.slice(initial, final));
  const [totalImagesFound, setTotalImagesFound] = useState("");
  useEffect(() => {
    const filteredImages = filterGalleryImages(props);
    setTotalImagesFound(filteredImages.length);
    setInitial(0);
    setFinal(20);
    if (filteredImages.length <= 20) {
      setHasmore(false);
      // setInitial(0);
      // setFinal(filteredImages.length);
      // console.log(
      //   filteredImages.length,
      //   filteredImages.slice(initial, final),
      //   filteredImages.slice(0, filteredImages.length),
      //   initial,
      //   final
      // );
    } else {
      setHasmore(true);
    }

    if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === "" &&
      props.id === undefined
    ) {
      // console.log("if");
      setItems(imagesList.slice(0, 20));
      setHasmore(true);
    } else {
      setItems(filteredImages.slice(initial, final));
      setImageList(filteredImages);
    }
  }, [props]);

  useEffect(() => {
    setItems(imagesList.slice(initial, final));
    setTotalImagesFound(imagesList.length);
  }, []);

  const fetchMoreData = () => {
    console.log(initial, final, imagelist);
    let initialC = initial;
    let finalC = final;
    if (items.length <= 20) {
      initialC = 0;
      finalC = items.length;
      setInitial(0);
      setFinal(items.length);
    } else {
      setInitial(initialC + 20);
      setFinal(finalC + 20);
    }

    if (items.length === imagelist.length) {
      setHasmore(false);
    }
    // console.log(initialC, finalC);
    setTimeout(() => {
      setItems(items.concat(imagelist.slice(initialC + 20, finalC + 20)));
    }, 1500);
  };

  return (
    <div>
      <h2 className={classes.totalImages}>
        Total: {totalImagesFound} Images Found.
      </h2>
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
        <Grid container className={classes.grid} spacing={2}>
          {items.map((image, index) => (
            <Grid item lg={4} md={6} xs={12} key={index}>
              <img
                src={process.env.PUBLIC_URL + `/Gallery/${image.name}`}
                width="100%"
                alt="Galleryimage"
              />
              <h4 className={classes.imageName}>
                {image.name.replace(".jpg", "")}
              </h4>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};
export default GalleryImages;
