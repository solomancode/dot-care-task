import { Component, Input } from '@angular/core';

@Component({
  selector: 'dot-care-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
}
