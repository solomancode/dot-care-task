import { Component, Input } from '@angular/core';

@Component({
  selector: 'dot-care-master-search',
  templateUrl: './master-search.component.html',
  styleUrls: ['./master-search.component.scss'],
})
export class MasterSearchComponent {
  @Input() placeholder = '';
}
