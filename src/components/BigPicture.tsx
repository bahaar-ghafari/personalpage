import { ReactElement } from "react";
import { CustomBox } from "./CustomCumponents";
import { BoxProps } from "@material-ui/core";
import { me } from "../Helpers/GetIcon";
import { createStyles } from "@material-ui/core/styles";

interface TriangleProps {
  color: "orange" | "blue";
  classes:any
}

const useStyles = createStyles({
  root: {
    position: "absolute",
    transform: (props: TriangleProps) =>
      props.color === "blue"
        ? "rotate(95deg) skewX(-15deg) scale(1,.866)"
        : "rotate(40deg) skewX(-30deg) scale(1,.866)",
    bottom: (props: TriangleProps) =>
      props.color === "blue" ? "3rem" : "-13rem",
    right: (props: TriangleProps) =>
      props.color === "blue" ? "3rem" : "-5rem",
    zIndex: (props: TriangleProps) => (props.color === "blue" ? 2 : 1),
    "&::before": {
      content: "",
      position: "absolute",
      transform:
        "rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%)",

      width: (props: TriangleProps) => (props.color === "blue" ? "30rem" : "45rem"),
      height: (props: TriangleProps) => (props.color === "blue" ? "30rem" : "45rem"),
      backgroundColor: (props: TriangleProps) =>
        props.color === "blue" ? "blue" : "orange",
      borderTopRightRadius: (props: TriangleProps) =>
        props.color === "blue" ? "25%" : "15%",
    },
    "&::after": {
      content: "",
      position: "absolute",
      transform:
        "rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%)",

      width: (props: TriangleProps) =>
        props.color === "blue" ? "30rem" : "45rem",
      height: (props: TriangleProps) =>
        props.color === "blue" ? "30rem" : "45rem",
      backgroundColor: (props: TriangleProps) =>
        props.color === "blue" ? "blue" : "orange",
      borderTopRightRadius: (props: TriangleProps) =>
        props.color === "blue" ? "25%" : "15%",
    },
  },
});
const Triangle = (
  props: TriangleProps & Omit<BoxProps, keyof TriangleProps>
) => {
  const { classes,color, ...other } = props;
  return <CustomBox className={classes.root} {...other} />;
};

export default function BigPicture(): ReactElement {
  const cloassess = useStyles
  return (
    <CustomBox position="absolute" bottom="0" right="0" width="65%">
      <Triangle color="blue" classes={cloassess}/>
      <Triangle color="orange" classes={cloassess}/>

      <img
        src={me}
        alt="me.img"
        width="100%"
        style={{ position: "absolute", zIndex: 3, bottom: 0 }}
      />
    </CustomBox>
  );
}
