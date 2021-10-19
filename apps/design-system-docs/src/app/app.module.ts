import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { DesignSystemModule } from '@dot-care/design-system';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { SectionComponent } from './components/section/section.component';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [AppComponent, ColorPaletteComponent, SectionComponent, PreviewComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    DesignSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
