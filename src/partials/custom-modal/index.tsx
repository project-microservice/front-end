import styles from './custom-modal.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Modal } from 'react-bootstrap';

function CustomModal({ children, ...props }: any) {
  return (
    <Modal {...props} className={cx('custom-modal')} aria-labelledby="contained-modal-title-vcenter" centered>
      {children}
    </Modal>
  );
}

export default CustomModal;
