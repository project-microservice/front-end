import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../product-card';
import styles from './list-product.module.scss';
import classNames from 'classnames/bind';
import { AppDispatch, RootState } from '@/redux';
import { useEffect } from 'react';
import { fetchProduct } from '@/redux/action';
const cx = classNames.bind(styles);

function ListProduct({ categoryId }: { categoryId: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (categoryId) {
      const payload = { categoryId: parseInt(categoryId, 10) };
      dispatch(fetchProduct(payload));
    }
  }, [dispatch]);

  const { products, loading, error } = productState;
  if (loading) return <div>Loading...</div>;
  if (products && products.length === 0) return <div>No Product to display</div>;
  if (products)
    return (
      <div className={cx('product-card-wrapper')}>
        {products.map((data: any, index: number) => (
          <ProductCard key={index} data={data} />
        ))}
      </div>
    );
}

export default ListProduct;
