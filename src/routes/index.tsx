import { ComponentType } from 'react';
import { CategoryPage, HomePage, ProductPage } from '@/pages';

export interface RouteInterface {
  path: string;
  component: ComponentType;
  layout?: any;
}

const publicRoutes: RouteInterface[] = [
  { path: '/', component: HomePage },
  { path: '/category/:categoryId', component: CategoryPage },
  { path: '/product/:productId', component: ProductPage },
];

const privateRoutes = [];

export { publicRoutes };
