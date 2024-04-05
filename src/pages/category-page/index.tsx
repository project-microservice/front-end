import { useParams } from 'react-router-dom';
import styles from './category-page.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { fetchProduct } from '@/redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux';
import Filter from '@/components/filter';
import ListProduct from '@/components/list-product';
const cx = classNames.bind(styles);

function CategoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.productReducer);

  useEffect(() => {
    id && dispatch(fetchProduct(parseInt(id, 10)));
  }, [dispatch]);
  return (
    <section>
      <Filter />
      <ListProduct productState={productState} />
    </section>
  );
}

export default CategoryPage;
