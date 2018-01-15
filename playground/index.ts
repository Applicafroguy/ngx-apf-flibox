import { FlipBoxModule } from './../src/index';

/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app',
  template: `<apf-flipbox [front]="front" [back]="back"></apf-flipbox>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FlipBoxModule ]
})
class AppModule {
  title = 'My Title';
  front: {
    title: 'My Title',
    subtitle: 'subtitle',
    icon: 'icon'
  }

  back: {
    title: 'My Title Back',
    content: 'I am back content',
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
