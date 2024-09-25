// Router.jsx
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import App from './App';
import GetPhoto from './components/getPhoto';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { path: ':id', element: <GetPhoto /> },
    ],
  }
]);

export default router;
