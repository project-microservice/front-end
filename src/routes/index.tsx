import CategoryPage from '@/pages/category-page';
import HomePage from '@/pages/home-page';
import ProductPage from '@/pages/product-page';
import { ComponentType } from 'react';

export interface RouteInterface {
  path: string;
  component: ComponentType;
  layout?: any;
}

const publicRoutes: RouteInterface[] = [
  { path: '/', component: HomePage },
  { path: '/category/:id', component: CategoryPage },
  { path: '/product/:id', component: ProductPage },
];

const privateRoutes = [];

export { publicRoutes };
