import { ComponentType } from 'react';
import styles from './dynamic-link.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MainMenuInterface } from '@/components/main-menu';

function DynamicLink({
  icon,
  subIcon,
  locationValue,
  logo,
  onClick,
  to,
  href,
  width = 20,
  height = 20,
  flipIcon,
  children,
  hover,
  smember,
  mainMenu,
  filter,
  ...unknownProps
}: any) {
  let Component: ComponentType<any> | string = 'button';
  const props: { [key: string]: any } = {
    onClick,
    ...unknownProps,
  };
  let styleCustom: any = {
    width: `${width}px`,
    height: `${height}px`,
  };
  if (to) {
    props['to'] = to;
    Component = NavLink;
  } else if (href) {
    props['href'] = href;
    Component = 'a';
  }
  const classes = cx('wrapper', {
    logo,
    icon,
    subIcon,
    flipIcon,
    hover,
    smember,
    mainMenu,
    filter,
  });

  if (mainMenu && typeof children === 'object') {
    const item: MainMenuInterface = children;
    const newStyle = { color: 'black', ...styleCustom };

    return (
      <div className={classes} {...props}>
        <div className={cx('left-content')}>
          <FontAwesomeIcon icon={item.icon} style={newStyle} />
          {item.display.map((categoryName, index) => (
            <NavLink key={index} to={`/category/${item.path[index]}`} className={cx('item')}>
              {categoryName}
            </NavLink>
          ))}
        </div>
        <div className={cx('right-content')}>
          <FontAwesomeIcon icon={subIcon} style={{ width: 10, height: 10, color: 'black' }} />
        </div>
      </div>
    );
  }

  if (subIcon && icon && locationValue) {
    return (
      <Component className={classes} {...props}>
        <FontAwesomeIcon icon={icon} style={styleCustom} />
        <div className={cx('box-content')}>
          <div className={cx('title')}>
            <div>{children}</div>
            <FontAwesomeIcon icon={subIcon} />
          </div>
          <div className={cx('location')}>{locationValue}</div>
        </div>
      </Component>
    );
  }

  if (icon) {
    return (
      <Component className={classes} {...props}>
        <FontAwesomeIcon icon={icon} style={styleCustom} />
        {children && <div>{children}</div>}
      </Component>
    );
  }

  return (
    <Component className={classes} {...props}>
      {children && <div>{children}</div>}
    </Component>
  );
}

export default DynamicLink;
