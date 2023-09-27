import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent {
  @Input() name: string = '';
  @Input() sub: string = '';
  @Input() Obj!: { email: string; Altura: number; Peso: number };
}
