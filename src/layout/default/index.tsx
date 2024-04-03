import Banner from '@/components/banner';
import styles from './default.module.scss';
import classNames from 'classnames/bind';
import Navbar from '@/components/navbar';
import CustomModal from '@/partials/custom-modal';

const cx = classNames.bind(styles);

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import LoginModal from '@/partials/login-modal';
import LocationModal from '@/partials/location-modal';
import { toggleLogin, toggleLocation } from '@/redux/slices/toggleSlices';

function DefaultLayout({ children }: any) {
  const toggleModal = useSelector((state: RootState) => state.toggleSlices);
  const dispatch = useDispatch();
  const closeLoginModal = () => dispatch(toggleLogin());
  const closeLocationModal = () => dispatch(toggleLocation());
  const { login, location } = toggleModal;
  return (
    <div className={cx('layout-desktop')}>
      <Banner />
      <Navbar />
      <div className={cx(['container', 'cps-body'])}>{children}</div>
      {login && (
        <CustomModal show={login} onHide={closeLoginModal}>
          {login && <LoginModal />}
        </CustomModal>
      )}

      {location && (
        <CustomModal show={location} onHide={closeLocationModal}>
          {location && <LocationModal />}
        </CustomModal>
      )}
    </div>
  );
}

export default DefaultLayout;
