import images from '@/assets/images';
import styles from './banner.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const listBanner = [images.banner1, images.banner2, images.banner3];

function Banner() {
  return (
    <div className={cx('banner-top-head')}>
      <div className={cx('container')}>
        <div className={cx('banner-wrapper')}>
          {listBanner.map((banner, index) => (
            <div className={cx('banner')} key={index}>
              <img src={banner} alt={index.toString()} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
