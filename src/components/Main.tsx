import { Box, Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import BigPicture from './BigPicture';
import Content from './Content';

export default function Main(): ReactElement {
  return (
      <Box display="flex" justifyContent="center" alignItems="center" height='100vh'>
        <Box
        borderRadius='10px'
        width='90vw'
        height='90vh'
          style={{
            backgroundColor: '#f1f1f1',
          }}
        >
          {/* nothing */}
          {/* <Header /> */}
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Content />
            </Grid>
            <Grid item md={6} xs={12}>
              <BigPicture />
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
}
