import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: '',component:InicioComponent},
  {path: 'educacion',component:EducacionComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'contacto', component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
