// Layouts

// Pages
import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Category from '~/pages/Category';
import ProductDetail from '~/pages/ProductDetail';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/category', component: Category },
  { path: '/product-detail/:id', component: ProductDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
