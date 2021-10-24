import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button/button.component';
import { SurfaceComponent } from './components/surface/surface/surface.component';
import { IconComponent } from './components/icon/icon/icon.component';
import { IconLabelComponent } from './components/icon-label/icon-label/icon-label.component';
import { ArticleComponent } from './components/article/article.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { InputComponent } from './components/input/input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MasterSearchComponent } from './components/master-search/master-search.component';
import { StaticDropdownComponent } from './components/static-dropdown/static-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ButtonComponent,
    SurfaceComponent,
    IconComponent,
    IconLabelComponent,
    ArticleComponent,
    BreadcrumbsComponent,
    InputComponent,
    DropdownComponent,
    ModalComponent,
    DatatableComponent,
    MasterSearchComponent,
    StaticDropdownComponent,
  ],
  exports: [
    NgxDatatableModule,
    ButtonComponent,
    SurfaceComponent,
    IconComponent,
    IconLabelComponent,
    ArticleComponent,
    BreadcrumbsComponent,
    InputComponent,
    DropdownComponent,
    ModalComponent,
    DatatableComponent,
    MasterSearchComponent,
    StaticDropdownComponent,
  ],
})
export class DesignSystemModule {}
