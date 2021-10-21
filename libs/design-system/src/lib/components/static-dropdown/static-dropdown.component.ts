import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon/icons';

@Component({
  selector: 'dot-care-static-dropdown',
  templateUrl: './static-dropdown.component.html',
  styleUrls: ['./static-dropdown.component.scss'],
})
export class StaticDropdownComponent {
  @Input() icon: Icon = 'NOT_SET';
  @Input() label = '';

  open = false;

  toggle() {
    this.open = !this.open;
  }
}
