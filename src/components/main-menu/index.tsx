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
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

export interface MainMenuInterface {
  display: string[];
  path: string[];
  icon: any;
}
const mainMenuData: MainMenuInterface[] = [
  {
    display: ['Điện thoại', 'Tablet'],
    path: ['phone', 'tablet'],
    icon: faMobilePhone,
  },
  {
    display: ['Laptop'],
    path: ['laptop'],
    icon: faLaptop,
  },
  {
    display: ['Âm Thanh'],
    path: ['sound'],
    icon: faHeadphones,
  },
  {
    display: ['Đồng Hồ', 'Camera'],
    path: ['watch', 'camera'],
    icon: faCamera,
  },
  {
    display: ['Gia dụng', 'Smarthome'],
    path: ['facilities', 'smarthome'],
    icon: faHome,
  },
  {
    display: ['Phụ kiện'],
    path: ['accessories'],
    icon: faUsd,
  },
  {
    display: ['PC', 'Màn Hình'],
    path: ['pc', 'screen'],
    icon: faComputer,
  },
  {
    display: ['Tivi'],
    path: ['television'],
    icon: faTelevision,
  },
  {
    display: ['Thu cũ đổi mới'],
    path: ['watch', 'camera'],
    icon: faTrademark,
  },
  {
    display: ['Hàng cũ'],
    path: ['trading'],
    icon: faDashboard,
  },
  {
    display: ['Khuyến mãi'],
    path: ['watch', 'camera'],
    icon: faPercentage,
  },
  {
    display: ['Tin công nghệ'],
    path: ['news'],
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
