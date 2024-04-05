import DynamicLink from '@/partials/dynamic-link';
import styles from './main-menu.module.scss';
import classNames from 'classnames/bind';
import {
  faCamera,
  faChevronRight,
  faComputer,
  faDashboard,
  faHeadphones,
  faHome,
  faLaptop,
  faMobilePhone,
  faNewspaper,
  faPercentage,
  faTelevision,
  faTrademark,
  faUsd,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

export interface MainMenuInterface {
  display: string[];
  path: number[];
  icon: any;
}
const mainMenuData: MainMenuInterface[] = [
  {
    display: ['Điện thoại', 'Tablet'],
    path: [1, 2],
    icon: faMobilePhone,
  },
  {
    display: ['Laptop'],
    path: [3],
    icon: faLaptop,
  },
  {
    display: ['Âm Thanh'],
    path: [4],
    icon: faHeadphones,
  },
  {
    display: ['Đồng Hồ', 'Camera'],
    path: [5, 6],
    icon: faCamera,
  },
  {
    display: ['Gia dụng', 'Smarthome'],
    path: [7, 8],
    icon: faHome,
  },
  {
    display: ['Phụ kiện'],
    path: [9],
    icon: faUsd,
  },
  {
    display: ['PC', 'Màn Hình'],
    path: [10, 11],
    icon: faComputer,
  },
  {
    display: ['Tivi'],
    path: [12],
    icon: faTelevision,
  },
  {
    display: ['Thu cũ đổi mới'],
    path: [13, 14],
    icon: faTrademark,
  },
  {
    display: ['Hàng cũ'],
    path: [15],
    icon: faDashboard,
  },
  {
    display: ['Khuyến mãi'],
    path: [16, 17],
    icon: faPercentage,
  },
  {
    display: ['Tin công nghệ'],
    path: [18],
    icon: faNewspaper,
  },
];

function MainMenu() {
  return (
    <div className={cx('main-menu')}>
      {mainMenuData.map((item: MainMenuInterface, index: number) => {
        return <DynamicLink key={index} mainMenu children={item} icon={item.icon} subIcon={faChevronRight} />;
      })}
    </div>
  );
}

export default MainMenu;
