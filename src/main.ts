import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FooterComponent } from './app/footer/footer.component';
import { HeaderComponent } from './app/header/header.component';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { InicioComponent } from './app/inicio/inicio.component';
import { NosotrosComponent } from './app/nosotros/nosotros.component';
import { ContactoComponent } from './app/contacto/contacto.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet
   
  ],
  template: `
  <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class App {
  name = 'Angular';
}

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent}
]
bootstrapApplication(App, {providers: [provideRouter(routes)]});
