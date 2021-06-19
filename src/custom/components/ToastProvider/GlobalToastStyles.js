import { css, keyframes } from 'styled-components';

const GlobalToastStyles = {
  /** Used to define container behavior: width, position: fixed etc... **/
  '.Toastify__toast-container': {
    zIndex: '9999',
    '-webkit-transform': 'translate3d(0, 0, 9999px)',
    position: 'fixed',
    padding: '4px',
    width: '24rem',
    boxSizing: 'border-box',
    color: '#fff',
  },
  /** Used to define the position of the ToastContainer **/
  '.Toastify__toast-container--top-left': { top: '1em', left: '1em' },
  '.Toastify__toast-container--top-center': {
    top: '1em',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '.Toastify__toast-container--top-right': { top: '1em', right: '1em' },
  '.Toastify__toast-container--bottom-left': { bottom: '1em', left: '1em' },
  '.Toastify__toast-container--bottom-center': {
    bottom: '1em',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '.Toastify__toast-container--bottom-right': { bottom: '1em', right: '1em' },
  /** Classes for the displayed toast **/
  '.Toastify__toast': {
    position: 'relative',
    minHeight: '2.75rem',
    boxSizing: 'border-box',
    marginBottom: '1rem',
    paddingY: 3,
    paddingX: 2,
    borderRadius: '2px',
    boxShadow: '0 1px 4px 1px rgba(24, 60, 52, 0.16), 0 1px 1px 0 rgba(24, 60, 52, 0.08);',
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: '800px',
    overflow: 'hidden',
    fontFamily: 'default',
    cursor: 'default',
    direction: 'ltr',
  },
  '.Toastify__toast--rtl': { direction: 'rtl' },
  '.Toastify__toast--dark': {
    backgroundColor: 'white',
    color: 'text.default',
    borderLeftWidth: '0.25rem',
    borderLeftStyle: 'solid',
    borderLeftColor: 'gray.50',
  },
  '.Toastify__toast--default': {
    backgroundColor: 'white',
    color: 'text.default',
    borderLeftWidth: '0.25rem',
    borderLeftStyle: 'solid',
    borderLeftColor: 'info.base',
  },
  '.Toastify__toast--info': {
    backgroundColor: 'white',
    color: 'text.default',
    borderLeftWidth: '0.25rem',
    borderLeftStyle: 'solid',
    borderLeftColor: 'info.base',
  },
  '.Toastify__toast--success': {
    backgroundColor: 'white',
    color: 'text.default',
    borderLeftWidth: '0.25rem',
    borderLeftStyle: 'solid',
    borderLeftColor: 'success.base',
  },
  '.Toastify__toast--warning': {
    backgroundColor: 'white',
    color: 'text.default',
    borderLeftWidth: '0.25rem',
    borderLeftStyle: 'solid',
    borderLeftColor: 'warning.base',
  },
  '.Toastify__toast--error': {
    backgroundColor: 'white',
    color: 'text.default',
    borderLeftWidth: '0.25rem',
    borderLeftStyle: 'solid',
    borderLeftColor: 'error.base',
  },
  '.Toastify__toast-body': {
    margin: 'auto 0',
    flex: '1 1 auto',
  },

  /** Classes for the close button. Better use your own closeButton **/
  '.Toastify__close-button': {},
  '.Toastify__close-button--default': {},
  '.Toastify__close-button > svg': {},
  '.Toastify__close-button:hover, .Toastify__close-button:focus': {},

  /** Classes for the progress bar **/
  '.Toastify__progress-bar': {},
  '.Toastify__progress-bar--animated': {},
  '.Toastify__progress-bar--controlled': {},
  '.Toastify__progress-bar--rtl': {},
  '.Toastify__progress-bar--default': {},
  '.Toastify__progress-bar--dark': {},
};

const Toastify__slideInRight = keyframes`
    from {
        transform: translate3d(110%, 0, 0);
        visibility: visible;
    }
    to {
        transform: translate3d(0, 0, 0);
    }`;

const Toastify__slideInLeft = keyframes`
    from {
        transform: translate3d(-110%, 0, 0);
        visibility: visible;
    }
    to {
        transform: translate3d(0, 0, 0);
    }`;

const Toastify__slideInUp = keyframes`
    from {
        transform: translate3d(0, 110%, 0);
        visibility: visible;
    }
    to {
        transform: translate3d(0, 0, 0);
    }`;

const Toastify__slideInDown = keyframes`
    from {
        transform: translate3d(0, -110%, 0);
        visibility: visible;
    }
    to {
        transform: translate3d(0, 0, 0);
    }`;

const Toastify__slideOutRight = keyframes`
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        visibility: hidden;
        transform: translate3d(110%, 0, 0);
    }`;

const Toastify__slideOutLeft = keyframes`
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        visibility: hidden;
        transform: translate3d(-110%, 0, 0);
    }`;

const Toastify__slideOutDown = keyframes`
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        visibility: hidden;
        transform: translate3d(0, 500px, 0);
    }`;

const Toastify__slideOutUp = keyframes`
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        visibility: hidden;
        transform: translate3d(0, -500px, 0);
    }`;

export const toastAnimations = css`
  .Toastify__slide-enter {
    &--top-left,
    &--bottom-left {
      animation: ${Toastify__slideInLeft};
    }
    &--top-right,
    &--bottom-right {
      animation: ${Toastify__slideInRight};
    }
    &--top-center {
      animation: ${Toastify__slideInDown};
    }
    &--bottom-center {
      animation: ${Toastify__slideInUp};
    }
  }

  .Toastify__slide-exit {
    &--top-left,
    &--bottom-left {
      animation: ${Toastify__slideOutLeft};
    }
    &--top-right,
    &--bottom-right {
      animation: ${Toastify__slideOutRight};
    }
    &--top-center {
      animation: ${Toastify__slideOutUp};
    }
    &--bottom-center {
      animation: ${Toastify__slideOutDown};
    }
  }
`;

export default GlobalToastStyles;
