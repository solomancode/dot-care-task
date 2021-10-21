import { Component } from '@angular/core';

type TODO = any;

@Component({
  selector: 'dot-care-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-system-docs';

  icons: TODO = ['Dashboard', 'Warehouse'];

  openModal = false;

  public toggleModal() {
    this.openModal = !this.openModal;
  }

  onDismiss() {
    this.openModal = false;
  }

  onPageChanged(event: number) {
    console.log(event);
  }
}
