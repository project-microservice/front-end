import { ModalClose, ModalDialog, Typography } from '@mui/joy';
import styles from './location-modal.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);

const LocationModal = forwardRef(() => {
  return (
    <ModalDialog variant="plain">
      <ModalClose />
      <Typography>Modal title</Typography>
    </ModalDialog>
  );
});

export default LocationModal;
