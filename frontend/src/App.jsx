import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import store from './features/store';
import { authLoader } from './features/utils/authLoader';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
    loader: authLoader, // Подключаем наш loader для проверки токена
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
