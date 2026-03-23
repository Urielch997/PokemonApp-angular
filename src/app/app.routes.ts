import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'pokemon-selection',
                loadComponent: () => import('./feature/pokemon-selecction/pokemon-selecction.component').then(m => m.PokemonSelecctionComponent)
            },
            {
                path: 'profile-view',
                loadComponent: () => import('./feature/profile-view/profile-view.component').then(m => m.ProfileViewComponent)
            }
        ]

    }
];
