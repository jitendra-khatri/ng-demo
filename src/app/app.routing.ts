import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { RegisterComponent } from './register';

const appRoutes: Routes = [
   
    { path: 'login', component: LoginComponent },
   
    { path: 'register', component: RegisterComponent },
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{ path: 'reset-password', component: ResetPasswordComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);