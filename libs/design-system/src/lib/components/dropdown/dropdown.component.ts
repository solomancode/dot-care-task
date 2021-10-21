import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';

interface DropdownItem<T> {
  label: string;
  value: T;
}

@Component({
  selector: 'dot-care-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() multiSelect = true;
  @Input() items: DropdownItem<unknown>[] = [];

  @Output() update = new EventEmitter<Set<DropdownItem<unknown>>>();

  selected: Set<DropdownItem<unknown>> = new Set();

  open = false;

  dismiss(event: Event) {
    event.preventDefault();
    this.open = false;
  }

  showOptions() {
    this.open = true;
  }

  select(item: DropdownItem<unknown>, event: Event) {
    event.preventDefault();
    this.multiSelect
      ? this.selected.add(item)
      : (this.selected = new Set([item]));
    this.update.emit(this.selected);
  }

  deselect(item: DropdownItem<unknown>) {
    this.selected.delete(item);
    this.update.emit(this.selected);
  }
}
