import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import AppLayout from '@/modules/core/components/AppLayout'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { corePathConstants } from '@/modules/core/routing/path-constants'
import appRoutes from '@/modules/core/routing/routes'
import { mapRoutesRecursively } from '@/lib/routes'

const finalRoutes = [...appRoutes];

export const AppRoutes = () => {
	const routes: RouteObject[] = [
		{
			path: corePathConstants.HOME,
			element: <AppLayout />,
			children: mapRoutesRecursively(finalRoutes),
		},
	];

	const element = useRoutes(routes);
	return element;
};

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</StrictMode>
)
