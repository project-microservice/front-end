import { useParams } from 'react-router-dom';
import styles from './category-page.module.scss';
import classNames from 'classnames/bind';
import Filter from '@/components/filter';
import ListProduct from '@/components/list-product';
const cx = classNames.bind(styles);

function CategoryPage() {
  const { categoryId } = useParams();
  if (categoryId)
    return (
      <section>
        <Filter />
        <ListProduct categoryId={categoryId} />
      </section>
    );
}

export default CategoryPage;
