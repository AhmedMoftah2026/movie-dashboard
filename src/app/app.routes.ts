import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {UserDashboardComponent} from "./components/user-dashboard/user-dashboard.component";

export const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'user', component: UserDashboardComponent },
  { path: '**', redirectTo: '/user' }
];

//
// export const routes: Routes = [{ path: 'login',
//                                   component: LoginComponent,
//                                   title: 'Login'
// }];


