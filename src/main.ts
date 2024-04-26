import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MisionComponent } from './app/mision/mision.component';
import { ValoresComponent } from './app/valores/valores.component';
import { ImagenComponent } from './app/imagen/imagen.component';
import { FooterComponent } from './app/footer/footer.component';
import { HeaderComponent } from './app/header/header.component';
import { NosotrosComponent } from './app/nosotros/nosotros.component';
import { ContactoComponent } from './app/contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MisionComponent,
    ValoresComponent,
    ImagenComponent,
    FooterComponent,
    HeaderComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  template: `
  <app-header></app-header>
    <app-mision></app-mision>
    <app-valores></app-valores>
    <app-imagen></app-imagen>
    <app-nosotros></app-nosotros>
    <app-contacto></app-contacto>
    <app-footer></app-footer>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
