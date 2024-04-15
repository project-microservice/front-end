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
  faBagShopping,
  faPhone,
  faTableList,
  faTruck,
  faUser,
  faLocationDot,
  faChevronDown,
  faArrowDownWideShort,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconMap: any = {
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
  faBagShopping,
  faPhone,
  faTableList,
  faTruck,
  faUser,
  faLocationDot,
  faChevronDown,
  faArrowDownWideShort,
  faEye,
};

export const IconComponent = ({ iconName, style }: any) => {
  const icon = iconMap[iconName];
  return <FontAwesomeIcon icon={icon} style={style} />;
};
