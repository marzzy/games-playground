import App from 'pages/home/App';
import XO from 'pages/xo/xo';

export default [
  {
    path: '/',
    name: 'home',
    component: App,
  },
  {
    path: '/xo',
    name: 'x-o',
    component: XO,
  },
];
