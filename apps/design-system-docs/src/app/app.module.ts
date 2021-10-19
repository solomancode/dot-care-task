import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { DesignSystemModule } from '@dot-care/design-system';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    DesignSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
