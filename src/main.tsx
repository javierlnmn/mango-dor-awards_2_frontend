import '@/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
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
        <Toaster
          toastOptions={{
            style: {
              borderRadius: '12px',
              background: 'rgba(51, 51, 51, 0.75)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              padding: '12px 18px',
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
