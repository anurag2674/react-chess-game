import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ChessBoard from './components/chessboard/ChessBoard';
import Menu from './components/menu/Menu';
import './index.css';
//redux store
import { Provider } from 'react-redux';
import store from './redux/store';
const Layout = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Menu /> },
      { path: '/game', element: <ChessBoard /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routes} />);
