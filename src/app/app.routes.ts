import { Routes } from '@angular/router';
import { Test } from './pages/test/test';
import { ViewQueries } from './pages/view-queries/view-queries';
import { ContentChild } from './pages/content-child/content-child';

export const routes: Routes = [
  {
    path: '',
    component: Test,
    title: 'Angular Labs',
  },
  {
    path: 'view-queries',
    component: ViewQueries,
    title: 'Angular Labs - View Queries',
  },
  {
    path: 'content-child',
    component: ContentChild,
    title: 'Angular Labs - Content Child',
  },
];
