import { Modal, Sheet } from '@mui/joy';
import styles from './custom-modal.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CustomModal = ({ open, onClose, children, sx }: any) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Sheet sx={sx}>{children}</Sheet>
    </Modal>
  );
};
export default CustomModal;
