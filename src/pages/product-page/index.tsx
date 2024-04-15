import { useParams } from 'react-router-dom';
import styles from './product-page.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ProductPage() {
  const { productId } = useParams();
  return (
    <div>
      <h1>Product pages {productId}</h1>
    </div>
  );
}
export default ProductPage;
