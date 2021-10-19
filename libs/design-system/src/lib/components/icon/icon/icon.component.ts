import { Component, Input } from '@angular/core';
import { Icon } from './icons';

const NOT_SET = 'NOT_SET';

@Component({
  selector: 'dot-care-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  static BaseURL = '/assets/shared/icons/';
  static DefaultExtension = '.svg';

  @Input() icon: Icon = NOT_SET;
  @Input() active = NOT_SET;

  isActive() {
    return this.active !== NOT_SET;
  }

  get src() {
    if (this.icon === 'NOT_SET') return '';
    const is_active = this.isActive() ? '.active' : '.default';
    return (
      IconComponent.BaseURL +
      this.icon +
      is_active +
      IconComponent.DefaultExtension
    );
  }
}
