import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { RegistroUsuarioComponent } from './registro/registro-usuario/registro-usuario.component';
import { RegistroEmpresaComponent } from './registro/registro-empresa/registro-empresa.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes:Routes=[

  {path:'inicio', component:PrincipalComponent},
  {path:'registro', component:RegistroComponent, 
  children:[

    {path: 'usuario', component: RegistroUsuarioComponent},
    {path: 'empresa', component: RegistroEmpresaComponent}

  ],},
  {path:'contacto', component: ContactoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    RegistroComponent,
    FooterComponent,
    ContactoComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
