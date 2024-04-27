import { Component } from '@angular/core';
import { MisionComponent } from '../mision/mision.component';
import { ValoresComponent } from '../valores/valores.component';
import { ImagenComponent } from '../imagen/imagen.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MisionComponent, ValoresComponent, ImagenComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
