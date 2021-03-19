import { GridProps, Grid } from "@material-ui/core";
import React from "react";

export function CustomRow(props: GridProps): React.ReactElement {
  return (
    <Grid container {...props}>
      {props.children}
    </Grid>
  );
}
