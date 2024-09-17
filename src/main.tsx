import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import { createHashRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from './pages/error.tsx';
import Projects from './pages/projects.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/projects',
    element: <Projects/>,
    errorElement: <ErrorPage/>,
  }
], {
  basename: "/",
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={ router }/>
    </ChakraProvider>
  </StrictMode>,
)
