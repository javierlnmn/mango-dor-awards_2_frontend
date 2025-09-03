import '@/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppLayout from '@/modules/core/components/AppLayout';
import SiteParamsInitializer from '@/modules/core/components/SiteParamsInitializer';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteParamsInitializer />
        <AppLayout />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
