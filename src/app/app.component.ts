import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  useName = 'MANOLO';
  subName = 'FELIPE';
  Data = {
    email: 'mftneto@gmail.com',
    Altura: 1.81,
    Peso: 78,
  };
  title = 'curso-angular';
}
