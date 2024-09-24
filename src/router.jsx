// Router.jsx
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import App from './App';
import GetTest from './components/getTest';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { path: ':id', element: <GetTest /> },
    ],
  },{
    path: '/test', element: <GetTest/>
  }
]);

export default router;
