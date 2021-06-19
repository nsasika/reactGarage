/**
 * The select component uses the third-party library 'react-select'
 * https://react-select.com/
 *
 */

import React, { useMemo } from 'react';
import ReactSelect from 'react-select';
import defaultTheme from '@pagero/pagero-ui-theme';

import {
  customSelectComponents,
  customSelectComponentStyles,
  createCustomSelectTheme,
} from './customComponents';
import { makeSelectStyles } from './makeSelectStyles';

const defaultThemeFromProps = {};
const defaultOverrideStyles = {};
const defaultOverrideComponents = {};

const Select = React.forwardRef(
  (
    {
      theme: themeFromProps = defaultThemeFromProps,
      styles: overrideStyles = defaultOverrideStyles,
      components: overrideComponents = defaultOverrideComponents,
      ...props
    },
    ref
  ) => {
    const theme = useMemo(() => ({ ...defaultTheme, themeFromProps }), [themeFromProps]);
    const styles = useMemo(
      () => makeSelectStyles(customSelectComponentStyles, overrideStyles)(theme),
      [overrideStyles, theme]
    );
    const customTheme = useMemo(() => createCustomSelectTheme(theme), [theme]);
    const components = useMemo(() => ({ ...customSelectComponents, ...overrideComponents }), [
      overrideComponents,
    ]);

    return (
      <ReactSelect
        ref={ref}
        components={components}
        styles={styles}
        theme={customTheme}
        maxMenuHeight={500}
        isClearable={false}
        {...props}
      />
    );
  }
);

export default Select;
