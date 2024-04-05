import DynamicLink from '@/partials/dynamic-link';
import styles from './filter.module.scss';
import classNames from 'classnames/bind';
import { faArrowDownWideShort, faEye, faPercentage } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const filterItems = [
  { children: 'Giá Cao - Thấp', icon: faArrowDownWideShort },
  { children: 'Giá Thấp - Cao', icon: faArrowDownWideShort },
  { children: 'Khuyến mãi hot', icon: faPercentage },
  { children: 'Xem nhiều', icon: faEye },
];
function Filter() {
  return (
    <div>
      <div className={cx('filter')}>
        <div className={cx('title')}>Chọn theo tiêu chí</div>
        <div className={cx('title')}>Sắp xếp theo</div>
        <div className={cx('filter-wrapper')}>
          {filterItems.map(item => (
            <DynamicLink key={item.children} children={item.children} icon={item.icon} filter />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
