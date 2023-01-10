import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {
  compose,
  variant,
} from 'styled-system';

import {Box} from './Box';

export const BoxWrapper = styled(Box)`
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
                        height: '36px',
                        width: '36px',
                      },
                      medium: {
                        width: '40px',
                        height: '40px',
                      },
                      large: {
                        width: '46px',
                        height: '46px',
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
