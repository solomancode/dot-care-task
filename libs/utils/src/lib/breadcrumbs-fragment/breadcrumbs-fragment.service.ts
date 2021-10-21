import { Injectable } from '@angular/core';

export interface BreadcrumbsFragment {
  label: string;
  href: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsFragmentService {
  segments: string[] = [];

  setUrl(url: string) {
    const [path] = url === '/' ? [''] : url.split('?');
    this.segments = path.split('/');
  }

  getFragments(
    formatLabel?: (segment: string) => string
  ): BreadcrumbsFragment[] {
    return this.segments.map((segment) => ({
      label: formatLabel ? formatLabel(segment) : segment,
      href: segment,
    }));
  }
}
