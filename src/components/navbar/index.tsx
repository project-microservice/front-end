import DynamicLink from '@/partials/dynamic-link';
import styles from './navbar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { memo } from 'react';
import images from '@/assets/images';
import { useDispatch } from 'react-redux';
import { toggleLocation, toggleLogin } from '@/redux/slices/toggleSlice';

function Navbar() {
  const dispatch = useDispatch();
  const openModalLocation = () => {
    dispatch(toggleLocation());
  };
  const openModalLogin = () => {
    dispatch(toggleLogin());
  };
  return (
    <div className={cx('navbar')}>
      <div className={cx(['nav-link', 'container'])}>
        <DynamicLink to={'/'} logo>
          <img src={images.logo} alt="cellphones" />
        </DynamicLink>

        <DynamicLink icon={'faTableList'}>Danh mục</DynamicLink>

        <DynamicLink
          onClick={openModalLocation}
          icon={'faLocationDot'}
          subIcon={'faChevronDown'}
          locationValue={'Ho Chi Minh'}
          width={24}
          height={24}>
          Xem giá tại
        </DynamicLink>

        {/* SEARCH BAR */}
        <div style={{ flexGrow: 1 }}></div>
        {/* SEARCH BAR */}

        <DynamicLink icon={'faPhone'} width={24} height={24} hover>
          Gọi mua hàng <br /> 1800.2097
        </DynamicLink>

        <DynamicLink icon={'faLocationDot'} width={25} height={25} hover>
          Cửa hàng <br /> gần bạn
        </DynamicLink>

        <DynamicLink icon={'faTruck'} width={41} height={24} flipIcon hover>
          Tra cứu <br /> đơn hàng
        </DynamicLink>

        <DynamicLink icon={'faBagShopping'} width={25} height={25} hover>
          Giỏ <br /> hàng
        </DynamicLink>

        <DynamicLink icon={'faUser'} smember onClick={openModalLogin}>
          Smember
        </DynamicLink>
      </div>
    </div>
  );
}

export default memo(Navbar);
