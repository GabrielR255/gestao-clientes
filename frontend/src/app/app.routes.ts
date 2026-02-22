import { Routes } from '@angular/router';


export const routes: Routes = [

    {
        path:"",
        loadComponent: () => import('./features/home/home').then(m => m.Home)
    },

   {
    path:"cadastro",
   loadComponent: () => import('./features/auth/cadastro/cadastro').then(c => c.Cadastro)
   },
{

 path:"login",
loadComponent: () => import('./features/auth/login/login').then(m => m.Login)
},

{
path: "dashboard",
loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)

}


];
