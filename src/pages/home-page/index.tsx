import { getCategory } from '@/redux/action';
import { useFetchData } from '@/hook';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { MainMenu } from '@/components';
import styles from './home-page.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
const cx = classNames.bind(styles);

function HomePage() {
  useFetchData(getCategory, []);
  const categoryState = useSelector((state: RootState) => state.category);
  return (
    <div>
      <div className={cx('block-top-home')}>
        <div className={cx('grid-item')}>
          <MainMenu categoryState={categoryState} />
        </div>
        <div className={cx('grid-item')}>2123123123</div>
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
