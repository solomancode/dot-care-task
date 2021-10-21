import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignSystemModule } from '@dot-care/design-system';
import { HeaderComponent } from '../../components/header/header.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { NavComponent } from '../../components/nav/nav.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../overview/overview.module').then(
                (m) => m.OverviewModule
              ),
          },
          {
            path: 'inventory',
            loadChildren: () =>
              import('../inventory/inventory.module').then(
                (m) => m.InventoryModule
              ),
          },
        ],
      },
    ]),
    DesignSystemModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class DashboardModule {}
