import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { RouterModule } from '@angular/router';
import { DesignSystemModule } from '@dot-care/design-system';
import { InventoryDataModule } from '@dot-care/data-access/inventory/inventory-data.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    DesignSystemModule,
    InventoryDataModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: InventoryComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class InventoryModule {}
