// if we want this to be worked then need to add <app-login></app-login> in app.component.html
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ninoxerp_base/login/login.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: '/login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
