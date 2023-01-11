import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {
  compose,
  variant,
} from 'styled-system';

import {Box} from './Box';

export const BoxWrapper = styled(Box, {
  name: 'BoxWrapper',
})`
  background: ${(props) => themeGet('colors.background')(props)};
  ${(props, ...args) =>
          compose(
              variant({
                prop: 'size',
                variants: {
                  auto: {
                    width: 'auto',
                    height: 'auto',
                  },
                  small: {
                    height: '360px',
                    width: '360px',
                  },
                  medium: {
                    width: '400px',
                    height: '400px',
                  },
                  large: {
                    width: '460px',
                    height: '460px',
                  },
                  modal: {
                    width: '60vw',
                    minWidth: '300px',
                    height: '50vh',
                  },
                },
              }),
          )}
}
`;
