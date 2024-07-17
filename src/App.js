import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Education from './pages/Education';
import Experience from './pages/Experience';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <Error404 />,
  },
  {
    path: '/education',
    element: <Education />,
    errorElement: <Error404 />,
  },
  {
    path: '/experience',
    element: <Experience />,
    errorElement: <Error404 />,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
