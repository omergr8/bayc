import { imagesList } from "./Image";
export const filterGalleryImages = (props) => {
  console.log(props);
  var result = imagesList.filter((image) => {
    if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return image.Background === props.background;
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return image.Character === props.character;
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return image.Accessories.Mouth === props.mouth;
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return image.Accessories.RightHand === props.righthand;
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return image.Accessories.LeftHand === props.lefthand;
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return image.Accessories.Wrist === props.wrist;
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return image.Accessories.Item === props.item;
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Mouth === props.mouth
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.RightHand === props.righthand
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.RightHand === props.righthand
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Mouth === props.mouth
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Mouth === props.mouth
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Wrist === props.wrist &&
        image.Accessories.Mouth === props.mouth
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Item === props.item &&
        image.Accessories.Mouth === props.mouth
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.RightHand === props.righthand
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.Wrist === props.wrist &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand === "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand === "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Wrist === props.wrist &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.Wrist === props.wrist &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand === "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth === "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background === "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.Wrist === props.wrist &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item === ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background !== "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist === "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Item === props.item
      );
    } else if (
      props.background !== "" &&
      props.character === "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item !== ""
    ) {
      return (
        image.Background === props.background &&
        image.Accessories.Item === props.item &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    } else if (
      props.background === "" &&
      props.character !== "" &&
      props.mouth !== "" &&
      props.righthand !== "" &&
      props.lefthand !== "" &&
      props.wrist !== "" &&
      props.item !== ""
    ) {
      return (
        image.Accessories.Item === props.item &&
        image.Character === props.character &&
        image.Accessories.Mouth === props.mouth &&
        image.Accessories.RightHand === props.righthand &&
        image.Accessories.LeftHand === props.lefthand &&
        image.Accessories.Wrist === props.wrist
      );
    }
  });

  return result;
};
