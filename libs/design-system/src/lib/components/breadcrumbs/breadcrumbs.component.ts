import { Component, Input } from '@angular/core';

interface BCFragment {
  label: string;
  href: string;
}

@Component({
  selector: 'dot-care-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input()
  fragments: BCFragment[] = [];
}
