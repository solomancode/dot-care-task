import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { DesignSystemModule } from '@dot-care/design-system';

@NgModule({
  declarations: [AppComponent, LogoComponent, HeaderComponent, NavComponent],
  imports: [BrowserModule, DesignSystemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
