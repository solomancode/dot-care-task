import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dot-care-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements DoCheck {
  @Input() rows: any = [];
  @Input() columns: any = [];
  @Input() pages = 0;
  @Input() currentPage = 0;
  @Output() changePage = new EventEmitter<number>();

  pagesList = [];

  ngDoCheck() {
    this.pagesList = Array.from({ length: this.pages > 10 ? 10 : this.pages });
  }

  setPage(page: number) {
    if (page < 0 || page >= this.pages) return;
    this.currentPage = page;
    this.changePage.emit(this.currentPage);
  }
}
