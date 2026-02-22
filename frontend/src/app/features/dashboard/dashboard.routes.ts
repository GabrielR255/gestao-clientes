import { Routes } from "@angular/router";


export const DASHBOARD_ROUTES:Routes = [

{
path: '',
loadComponent: () => import('../dashboard/dashboardlink/dashboardlink.component/dashboardlink.component').then(m => m.DashboardlinkComponent),
children: [

{
path: '',
loadComponent: () => import('../dashboard/pages/dashboardlayout/layoutdashboard.component/layoutdashboard.component').then(m => m.LayoutdashboardComponent)

},



{
path:'configuracoes',
loadComponent: () => import('../dashboard/pages/settings/settings.component/settings.component').then(m => m.SettingsComponent)
},

{
path: 'registrar-usuario',
loadComponent: () => import('./pages/Registerclientes/formclient/formclient').then(m => m.Formclient)
},

{
path:'relatorio',
loadComponent:() => import ('./pages/relatorio/relatorio.component/relatorio.component').then(m => m.RelatorioComponent)
},

{
    path: 'modal-edit',
    loadComponent: () => import ('./components/lista-clientes/Modals/Modal-edit/modal-edit.component/modal-edit.component').then(m => m.ModalEditComponent)
},







]


},







]