import { useParams } from 'react-router-dom';
import styles from './category-page.module.scss';
import classNames from 'classnames/bind';
import axiosInstance from '@/services';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function CategoryPage() {
  const param = useParams();
  const [categoryId, setCategoryId] = useState(1);
  const fetchData = async () => {
    try {
      const result = await axiosInstance.get(`/product`, {
        params: {
          categoryId,
        },
      });
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>{param.id}</h1>
    </div>
  );
}

export default CategoryPage;
