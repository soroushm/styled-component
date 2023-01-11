import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  textAlign,
} from 'styled-system';

const BasicBox = styled.div`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${textAlign}
`;

BasicBox.displayName = 'Box';

export default BasicBox;
