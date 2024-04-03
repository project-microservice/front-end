import { Modal } from 'react-bootstrap';
import styles from './login-modal.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import DynamicLink from '../dynamic-link';
const cx = classNames.bind(styles);

function LoginModal() {
  return (
    <>
      <Modal.Header closeButton>
        <div className={cx('centered-text')}>Smemeber</div>
      </Modal.Header>
      <Modal.Body>
        <div className={cx('login-body')}>
          <img src={images.chibi} alt="" />
          <p>Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ dàng hơn.</p>
          <div className={cx('login-logout')}>
            <DynamicLink to={'/login'} children={'Đăng ký'} />
            <DynamicLink to={'/login'} children={'Đăng nhập'} />
          </div>
        </div>
      </Modal.Body>
    </>
  );
}

export default LoginModal;
