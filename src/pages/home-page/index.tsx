import MainMenu from '@/components/main-menu';
import styles from './home-page.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div>
      <div className={cx('block-top-home')}>
        <div className={cx('grid-item')}>
          <MainMenu />
        </div>
        <div className={cx('grid-item')}>2</div>
        <div className={cx('grid-item')}>
          <div>
            <img src={images.banner4} alt="" />
          </div>
          <div>
            <img src={images.banner5} alt="" />
          </div>
          <div>
            <img src={images.banner6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
