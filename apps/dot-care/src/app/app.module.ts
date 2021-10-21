import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { BreadcrumbsFragmentModule } from '@dot-care/utils/breadcrumbs-fragment/breadcrumbs-fragment.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutingModule, BreadcrumbsFragmentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
