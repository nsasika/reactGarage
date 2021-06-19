import React, { useEffect } from 'react';
import { ToastContainer, toast as baseToast, Slide } from 'react-toastify';
import {
  CloseIcon,
  CheckCircledFillIcon,
  InfoCircledFillIcon,
  WarningCircledFillIcon,
  CancelCircledFillIcon,
} from '../../icons';
import Button from '../Button';
import Stack from '../Stack';
import Text from '../Text';

const CloseButton = ({ closeToast }) => {
  useEffect(() => {
    const id = setTimeout(() => closeToast(), 5000);
    return () => clearTimeout(id);
  }, [closeToast]);

  return (
    <Button
      size='compact'
      variant='unstyled'
      sx={{ backgroundColor: 'transparent', alignSelf: 'flex-start', p: 0, mx: 2 }}
      onClick={closeToast}
    >
      <CloseIcon size={20} color='gray.40' />
    </Button>
  );
};

const ToastBody = ({ Icon, children, variant = 'info', ...props }) => (
  <Stack direction='row' gap={2}>
    <Icon size={20} color={`${variant}.base`} />
    {React.isValidElement(React.Children.toArray(children)[0]) ? children : <Text>{children}</Text>}
  </Stack>
);

const toastContainerOptions = {
  autoClose: true,
  limit: 10,
  transition: Slide,
  position: 'bottom-right',
  closeButton: CloseButton,
  draggable: false,
};

const ToastProvider = ({ ...props }) => {
  return <ToastContainer {...toastContainerOptions} {...props} />;
};

export const toast = (content, options) => baseToast(content, options);

toast.info = (content, options) =>
  baseToast.info(
    <ToastBody Icon={InfoCircledFillIcon} variant='info'>
      {content}
    </ToastBody>,
    options
  );
toast.success = (content, options) =>
  baseToast.success(
    <ToastBody Icon={CheckCircledFillIcon} variant='success'>
      {content}
    </ToastBody>,
    options
  );
toast.warn = (content, options) =>
  baseToast.warn(
    <ToastBody Icon={WarningCircledFillIcon} variant='warning'>
      {content}
    </ToastBody>,
    options
  );
toast.error = (content, options) =>
  baseToast.error(
    <ToastBody Icon={CancelCircledFillIcon} variant='error'>
      {content}
    </ToastBody>,
    options
  );

export default ToastProvider;
