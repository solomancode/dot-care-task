import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  BreadcrumbsFragment,
  BreadcrumbsFragmentService,
} from '@dot-care/utils/breadcrumbs-fragment/breadcrumbs-fragment.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dot-care-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  fragments: BreadcrumbsFragment[] = [];

  constructor(router: Router, breadcrumbs: BreadcrumbsFragmentService) {
    this.updateFragments(router, breadcrumbs);
  }

  updateFragments(router: Router, breadcrumbs: BreadcrumbsFragmentService) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const { url } = event as NavigationEnd;
        breadcrumbs.setUrl(url);
        this.fragments = breadcrumbs.getFragments((s) =>
          s === '' ? 'Dashboard' : s
        );
      });
  }
}
