import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() title!: string;
}
