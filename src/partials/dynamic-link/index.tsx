import { ComponentType } from 'react';
import styles from './dynamic-link.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { MainMenuInterface } from '@/components/main-menu';
import { IconComponent } from '../icon';
const cx = classNames.bind(styles);

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
  let style: any = {
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
    const newStyle = { color: 'black', ...style };

    return (
      <Component className={classes} {...props}>
        <div className={cx('left-content')}>
          <IconComponent iconName={item.icon} style={newStyle} />
          <span>{item.categoryName}</span>
        </div>
        <div className={cx('right-content')}>
          <IconComponent iconName={subIcon} style={{ width: 10, height: 10, color: 'black' }} />
        </div>
      </Component>
    );
  }

  if (subIcon && icon && locationValue) {
    return (
      <Component className={classes} {...props}>
        <IconComponent iconName={icon} style={style} />
        <div className={cx('box-content')}>
          <div className={cx('title')}>
            <div>{children}</div>
            <IconComponent iconName={subIcon} />
          </div>
          <div className={cx('location')}>{locationValue}</div>
        </div>
      </Component>
    );
  }

  if (icon) {
    return (
      <Component className={classes} {...props}>
        <IconComponent iconName={icon} style={style} />
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
