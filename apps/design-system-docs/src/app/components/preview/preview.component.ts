import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dot-care-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  @Input() title = '';
}
