import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './route/Route';

import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './AuthProvider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
   </QueryClientProvider>
  </React.StrictMode>,
)
