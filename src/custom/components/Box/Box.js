import styled from '../../style-system/styled';
import { compose, space, color, layout, flexbox, border } from 'styled-system';

const filterTheseProps = [];

const shouldForwardProp = (prop, defaultValidatorFn) => {
  return !filterTheseProps.includes(prop) && defaultValidatorFn(prop);
};

const base = props => props.__css;
const sx = props => props.sx;

const Box = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  sx,
  compose(space, color, layout, flexbox, border)
);

export default Box;
