import { Box, Link } from '@material-ui/core';
import React, { ReactElement } from 'react';

export default function Content(): ReactElement {
  return (
        <Box padding={11}>
          <Box height='100%' display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='start'>
            <h1>bahar ghafari</h1>
            <h2>web developer</h2>
            <p>Im Freelance web developer,id be happy to have chat about your project</p>
            <Link href="zahraghafari1996@gmail.com">zahraghafari1996@gmail.com</Link>
            <br />
          </Box>
          <Box textAlign='center'>
            <Box>my social account</Box>
            <Box display='flex' justifyContent='space-evenly'>
              <p>xxx</p> <p>xxx</p> <p>xxx</p> <p>xxx</p> <p>xxx</p>

            </Box>
          </Box >
        </Box>
  );
}
