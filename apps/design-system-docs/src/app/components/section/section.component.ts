import { Component, Input } from '@angular/core';

@Component({
  selector: 'dot-care-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() title = '';
}
