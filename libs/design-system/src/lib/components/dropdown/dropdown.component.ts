import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface DropdownItem<T> {
  label: string;
  value: T;
}

type SelectedItems<T> = Set<DropdownItem<T>>;

@Component({
  selector: 'dot-care-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent<T> implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() multiSelect = true;

  @Input() items: DropdownItem<T>[] = [];

  selected: SelectedItems<T> = new Set();

  open = false;

  publish = (value: SelectedItems<T>) => value;

  writeValue(selected: SelectedItems<T>): void {
    if (selected instanceof Set) {
      this.selected = selected;
    }
  }

  registerOnChange(fn: (value: SelectedItems<T>) => SelectedItems<T>): void {
    this.publish = fn;
  }

  registerOnTouched(): void {
    // throw new Error('Method not implemented.');
  }

  dismiss(event: Event) {
    event.preventDefault();
    this.open = false;
  }

  showOptions() {
    this.open = true;
  }

  select(item: DropdownItem<T>, event: Event) {
    event.preventDefault();
    this.multiSelect
      ? this.selected.add(item)
      : (this.selected = new Set([item]));
    this.publish(this.selected);
  }

  deselect(item: DropdownItem<T>) {
    this.selected.delete(item);
    this.publish(this.selected);
  }
}
