import { Routes } from '@angular/router';
import { DashboardComponent } from './views/find/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./views/maintenance/maintenance.component').then(c => c.MaintenanceComponent)
  },
  {
    path: 'find',
    loadComponent: () => import('./views/find/dashboard/dashboard.component').then(c => c.DashboardComponent),
    children: [
      {
        path: 'overview',
        loadComponent: () => import('./views/find/overview/overview.component').then(c => c.OverviewComponent)
      },
      {
        path: 'assessor/:id',
        loadComponent: () => import('./views/find/assessor-view/assessor-view.component').then(c => c.AssessorViewComponent)
      },
    ]
  },
  {
    path: 'scheduler',
    loadComponent: () => import('./views/maintenance/maintenance.component').then(c => c.MaintenanceComponent)
  },
  {
    path: 'documents',
    loadComponent: () => import('./views/maintenance/maintenance.component').then(c => c.MaintenanceComponent)
  },
  {
    path: 'resources',
    loadComponent: () => import('./views/maintenance/maintenance.component').then(c => c.MaintenanceComponent)
  },
  {
    path: 'accessibility',
    loadComponent: () => import('./views/maintenance/maintenance.component').then(c => c.MaintenanceComponent)
  },
  {
    path: 'user/:id',
    loadComponent: () => import('./views/maintenance/maintenance.component').then(c => c.MaintenanceComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];
