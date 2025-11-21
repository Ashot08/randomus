import { lazy } from 'react';

// export const PageOne = lazy(() => import('./PageOne'));

// @ts-expect-error Это просто для демонстрации эффекта задержки загрузки страницы
export const PageOne = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./PageOne')), 2000)));
