import images from '@/assets/images';
import styles from './product-card.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductCard({ data }: any) {
  const { productName, regularPrice, id } = data;
  const formattedRegularPrice = regularPrice.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return (
    <NavLink to={`/product/${id}`} className={cx('product-card-wrapper')}>
      <div className={cx('product-image')}>
        <img src={images.sampleProduct} alt="" />
      </div>
      <div className={cx('product-name')}>
        <h3>{productName}</h3>
      </div>
      <div className={cx('block-box-price')}>
        <p className={cx('product-price')}>{formattedRegularPrice}</p>
      </div>
      <div className={cx('block-smem-price')}>
        <p>Giảm thêm Smember đến</p> <span>270.000đ</span>
      </div>
    </NavLink>
  );
}

export default ProductCard;
