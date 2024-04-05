import ProductCard from '../product-card';
import styles from './list-product.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ListProduct({ productState }: any) {
  console.log(productState);
  if (productState.loading === true) return <div>Loading...</div>;
  if (productState.products)
    return (
      <div className={cx('product-card-wrapper')}>
        {productState.products.map((data: any, index: number) => (
          <ProductCard key={index} data={data} />
        ))}
      </div>
    );
}

export default ListProduct;
