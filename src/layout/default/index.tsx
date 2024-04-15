import styles from './default.module.scss';
import classNames from 'classnames/bind';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { toggleLogin, toggleLocation } from '@/redux/slices/toggleSlice';
const cx = classNames.bind(styles);
const Navbar = lazy(() => import('@/components/navbar'));
const Banner = lazy(() => import('@/components/banner'));
const LoginModal = lazy(() => import('@/partials/login-modal'));
const loginStyle = {
  maxWidth: 350,
  p: 3,
  boxShadow: 'lg',
  borderRadius: 'md',
};
function DefaultLayout({ children }: any) {
  const toggleModal = useSelector((state: RootState) => state.toggle);
  const dispatch = useDispatch();
  const closeLoginModal = () => dispatch(toggleLogin());
  const closeLocationModal = () => dispatch(toggleLocation());
  const { login, location } = toggleModal;
  return (
    <div className={cx('layout-desktop')}>
      <Banner />
      <Navbar />
      <div className={cx(['container', 'cps-body'])}>{children}</div>
      <LoginModal login={login} closeLoginModal={closeLoginModal} sx={loginStyle} />
    </div>
  );
}

export default DefaultLayout;
