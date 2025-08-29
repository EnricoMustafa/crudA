import { Routes } from '@angular/router';
import { CadastrarLoginComponent } from './cadastrar-login/cadastrar-login.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { ListaComponent } from './lista/lista.component';


export const routes: Routes = [
    {path: '', component: FormularioLoginComponent},
    {path:'cadastrar', component: CadastrarLoginComponent},
    {path: 'lista', component: ListaComponent}    
];
