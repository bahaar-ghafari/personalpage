import { styled, Typography, TypographyProps } from "@material-ui/core";
import React from 'react'
import { PxToRemOrEmConverter } from "../../../Helpers/Converter";

interface IProps {
  fontSize: number;
}
export function CustomTypography(
  props: TypographyProps & IProps
): React.ReactElement {
  const { fontSize } = props;
  const CustomTypo = styled(Typography)({
    fontSize: PxToRemOrEmConverter(fontSize, "em"),
    display: "flex",
    alignItems: "center",
  });
  return <CustomTypo {...props}>{props.children}</CustomTypo>;
}
