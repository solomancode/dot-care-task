import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as fuzzysort from 'fuzzysort';

@Component({
  selector: 'dot-care-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() formControlName: string | null = null;
  @Input() fuzzyOptions: string[] | null = null;

  fuzzyMode = false;
  recommendations: string[] = [];

  value: string | null = null;

  publish = (value: string) => value;

  writeValue(value: string): void {
    if (value?.length) {
      this.value = value;
    }
  }

  ngOnInit(): void {
    if (this.fuzzyOptions) {
      this.recommendations = this.fuzzyOptions;
    }
  }

  registerOnChange(fn: (value: string) => string): void {
    this.publish = fn;
  }

  fuzzySearch(event: Event) {
    const target = event.target as HTMLInputElement;
    if (this.fuzzyOptions) {
      this.recommendations = fuzzysort
        .go(target.value, this.fuzzyOptions)
        .map((result) => result.target);
    }
  }

  onValueChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.publish(target.value);
  }

  selectOption(value: string) {
    this.value = value;
    this.publish(value);
    this.fuzzyMode = false;
  }

  registerOnTouched(): void {
    // throw new Error('Method not implemented.');
  }
}
