import { LocationStrategy } from '@angular/common';
import { Component, DoCheck, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { Icon } from '../../icon/icon/icons';

const NOT_SET = 'NOT_SET';

@Component({
  selector: 'dot-care-icon-label',
  templateUrl: './icon-label.component.html',
  styleUrls: ['./icon-label.component.scss'],
})
export class IconLabelComponent extends RouterLinkWithHref implements DoCheck {
  @Input() icon: Icon = NOT_SET;
  @Input() label = '';

  active = false;

  constructor(
    router: Router,
    route: ActivatedRoute,
    locationStrategy: LocationStrategy,
    private ref: ElementRef<HTMLElement>
  ) {
    super(router, route, locationStrategy);
  }

  ngDoCheck() {
    this.active = this.ref.nativeElement.classList.contains('active');
  }
}
