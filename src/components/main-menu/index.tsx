import { memo } from 'react';
import DynamicLink from '@/partials/dynamic-link';
import styles from './main-menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export interface MainMenuInterface {
  id: number;
  categoryName: string;
  icon: string;
  categoryDescription: string;
}

function MainMenu({ categoryState }: any) {
  const { loading, category } = categoryState;
  if (loading) return <div>Loading...</div>;

  return (
    <div className={cx('main-menu')}>
      {category.map((item: MainMenuInterface) => {
        return (
          <DynamicLink
            key={item.id}
            mainMenu
            children={item}
            to={`/category/${item.id}`}
            icon={item.icon}
            subIcon={'faChevronRight'}
          />
        );
      })}
    </div>
  );
}

export default memo(MainMenu);
