import React from 'react';
import { Box } from './Box';


export const ShadowBox = (props) => (
  <Box background="#cecece" boxShadow="0px 2px #333" {...props}>
      {props.children}
  </Box>
);
