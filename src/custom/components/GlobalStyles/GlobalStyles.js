import { createGlobalStyle } from 'styled-components';
import defaultTheme from '@pagero/pagero-ui-theme';
import css from '@styled-system/css';
import { css as styledCss } from 'styled-components';
import GlobalToastStyles, { toastAnimations } from '../ToastProvider/GlobalToastStyles';

const styles = props =>
  css({
    html: {
      width: '100vw',
      overflowX: 'hidden',
    },
    body: {
      fontFamily: 'default',
      backgroundColor: 'background.body',
    },
    ...GlobalToastStyles,
  })({ theme: { ...defaultTheme, ...props.theme } });

const GlobalStyles = createGlobalStyle(styles, toastAnimations);

export default GlobalStyles;
