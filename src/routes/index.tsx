import CategoryPage from '@/pages/category-page';
import HomePage from '@/pages/home-page';
import { ComponentType } from 'react';

export interface RouteInterface {
  path: string;
  component: ComponentType;
  layout?: any;
}

const publicRoutes: RouteInterface[] = [
  { path: '/', component: HomePage },
  { path: '/category/:id', component: CategoryPage },
];

const privateRoutes = [];

export { publicRoutes };
