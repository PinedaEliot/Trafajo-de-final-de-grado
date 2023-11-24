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
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioSesionUsuarioComponent } from './inicio-sesion/inicio-sesion-usuario/inicio-sesion-usuario.component';
import { InicioSesionEmpresaComponent } from './inicio-sesion/inicio-sesion-empresa/inicio-sesion-empresa.component';
import { FaqComponent } from './faq/faq.component';
import { EmpresasColaboradorasComponent } from './empresas-colaboradoras/empresas-colaboradoras.component';

const appRoutes:Routes=[
  {path:'', component:PrincipalComponent},
  {path:'registro', component:RegistroComponent, 
  children:[

    {path: 'usuario', component: RegistroUsuarioComponent},
    {path: 'empresa', component: RegistroEmpresaComponent}

  ],},
  {path:'contacto', component: ContactoComponent},
  {path:'empresas', component: EmpresasColaboradorasComponent},
  {path:'faq', component: FaqComponent},
  {path:'login', component:InicioSesionComponent, 
  children:[

    {path: 'usuario', component: InicioSesionUsuarioComponent},
    {path: 'empresa', component: InicioSesionEmpresaComponent}

  ],},
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    RegistroComponent,
    FooterComponent,
    ContactoComponent,
    InicioSesionComponent,
    InicioSesionUsuarioComponent,
    InicioSesionEmpresaComponent,
    FaqComponent,
    EmpresasColaboradorasComponent
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
