import Home from 'pages/home';
import TicTacToe from 'pages/tic-tac-toe';
import Kit from 'pages/kit';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/tic-tac-toe',
    name: 'Tic-tac-toe',
    component: TicTacToe,
  },
  {
    path: '/kit',
    name: 'kit',
    component: Kit,
  },
];
