import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { RouterModule } from '@angular/router';
import { DesignSystemModule } from '@dot-care/design-system';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    DesignSystemModule,
    RouterModule.forChild([
      {
        path: '',
        component: OverviewComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class OverviewModule {}
