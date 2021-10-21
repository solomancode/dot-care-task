import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dot-care-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() open = false;

  @Output() dismiss = new EventEmitter();
}
