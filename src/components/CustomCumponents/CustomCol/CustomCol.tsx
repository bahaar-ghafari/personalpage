import { GridProps, Grid } from "@material-ui/core";
import React from "react";

export function CustomCol(props: GridProps): React.ReactElement {
  return (
    <Grid item {...props}>
      {props.children}
    </Grid>
  );
}
