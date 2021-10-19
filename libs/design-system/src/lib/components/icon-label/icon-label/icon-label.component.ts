import { Component, Input } from '@angular/core';
import { Icon } from '../../icon/icon/icons';

const NOT_SET = 'NOT_SET';

@Component({
  selector: 'dot-care-icon-label',
  templateUrl: './icon-label.component.html',
  styleUrls: ['./icon-label.component.scss'],
})
export class IconLabelComponent {
  @Input() icon: Icon = NOT_SET;
  @Input() label = '';
  @Input() active = NOT_SET;

  isActive() {
    return this.active !== NOT_SET;
  }
}
