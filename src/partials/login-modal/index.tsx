import { Box, ModalClose, Typography } from '@mui/joy';
import styles from './login-modal.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import DynamicLink from '../dynamic-link';
import { CustomModal } from '..';

const cx = classNames.bind(styles);

const LoginModal = ({ login, closeLoginModal, sx }: any) => {
  return (
    <CustomModal open={login} onClose={closeLoginModal} sx={sx}>
      <ModalClose />
      <Typography mb={1} id="modal-title" sx={{ textAlign: 'center' }}>
        Smemeber
      </Typography>

      <Box>
        <div className={cx('login-body')}>
          <img src={images.chibi} alt="" />
          <p>Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ dàng hơn.</p>
          <div className={cx('login-logout')}>
            <DynamicLink to={'/login'} children={'Đăng ký'} />
            <DynamicLink to={'/login'} children={'Đăng nhập'} />
          </div>
        </div>
      </Box>
    </CustomModal>
  );
};
export default LoginModal;
