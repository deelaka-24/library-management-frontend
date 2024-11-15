import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { MemberPageComponent } from './pages/member-page/member-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'login-page',
    component: LoginPageComponent,
  },
  {
    path: 'forgot-password-page',
    component: ForgotPasswordPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
      {
        path: 'book',
        component: BookPageComponent,
      },
      {
        path: 'members',
        component: MemberPageComponent,
      },
    ],
  },
];
