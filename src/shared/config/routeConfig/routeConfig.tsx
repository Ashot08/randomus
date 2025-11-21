import { RouteProps } from 'react-router-dom';
import { PageOne } from 'pages/pageOne';
import { Suspense } from 'react';
import { PageTwo } from 'pages/pageTwo';
import { Page404 } from 'pages/404';
import { PageLoader } from 'widgets/PageLoader';
import { PageRandomGenerator } from 'pages/pageRandomGenerator';

export enum AppRoutes {
  MAIN = 'main',
  PAGE_ONE = 'pageOne',
  PAGE_TWO = 'pageTwo',
  PAGE_404 = 'page404',
  PAGE_RANDOM_GENERATOR = 'pageRandomGenerator',
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PAGE_ONE]: '/one',
  [AppRoutes.PAGE_TWO]: '/two',
  [AppRoutes.PAGE_RANDOM_GENERATOR]: '/random-generator',
  [AppRoutes.PAGE_404]: '*',
}

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    element: <div>MAIN</div>
  },
  {
    path: RoutePath[AppRoutes.PAGE_ONE],
    element: <Suspense fallback={<PageLoader/>}><PageOne /></Suspense>
  },
  {
    path: RoutePath[AppRoutes.PAGE_TWO],
    element: <Suspense fallback={<PageLoader/>}><PageTwo /></Suspense>
  },
  {
    path: RoutePath[AppRoutes.PAGE_404],
    element: <Suspense fallback={<PageLoader/>}><Page404/></Suspense>
  },
  {
    path: RoutePath[AppRoutes.PAGE_RANDOM_GENERATOR],
    element: <Suspense fallback={<PageLoader/>}><PageRandomGenerator/></Suspense>
  },
];
