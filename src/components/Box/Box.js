import styled, { css } from 'styled-components';
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop';
import {
  space,
  color,
  layout,
  flexbox,
  shadow,
  border,
  grid,
  position,
  background,
  typography,
  system,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { animated } from 'react-spring';


const shouldForwardProp = createShouldForwardProp([
  ...props,
  'cursor',
  'transform',
  'outline',
]);

const customThemeBuilder = system({
  transform: {
    property: 'transform',
    scale: 'transforms',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  cursor: true,
  pointerEvents: true,
  textDecoration: true,
  textOverflow: true,
  textTransform: true,
  transformOrigin: true,
  whiteSpace: true,
  outline: true,
  transition: true,
  filter: true,
  userSelect: true,
  scrollBehavior: true,
});

export const BoxBase = styled.div.withConfig({
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    minWidth: 0,
    ':focus': {
      outline: 0,
    },
  },
  space,
  color,
  layout,
  grid,
  flexbox,
  shadow,
  border,
  position,
  background,
  typography,
  customThemeBuilder,
);

BoxBase.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.grid,
  ...propTypes.flexbox,
  ...propTypes.shadow,
  ...propTypes.border,
  ...propTypes.position,
  ...propTypes.background,
  ...propTypes.typography,
};

BoxBase.defaultProps = {};

// https://www.react-spring.dev/docs/concepts/animated-elements
export const AnimatedBox = animated(BoxBase);
export const Box = styled(BoxBase)`
 //  custom css
`;

Box.defaultProps = {
  print: {},
};
