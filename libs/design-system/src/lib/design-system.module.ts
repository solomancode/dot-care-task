import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button/button.component';
import { SurfaceComponent } from './components/surface/surface/surface.component';
import { IconComponent } from './components/icon/icon/icon.component';
import { IconLabelComponent } from './components/icon-label/icon-label/icon-label.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    SurfaceComponent,
    IconComponent,
    IconLabelComponent,
  ],
  exports: [
    ButtonComponent,
    SurfaceComponent,
    IconComponent,
    IconLabelComponent,
  ],
})
export class DesignSystemModule {}
