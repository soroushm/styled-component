import React from 'react';
import { Box } from './Box';


export const ShadowBox = (props) => (
  <Box color="#ff0000" background="#cecece" boxShadow="2px 2px #333" {...props}>
    Content
  </Box>
);
