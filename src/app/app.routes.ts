import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildModule } from './child/child.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'child',
    loadChildren: () => import('./child/child.module').then(m => m.ChildModule)
  }
]
