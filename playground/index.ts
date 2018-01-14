
/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FlipBoxModule }  from 'ngx-apf-flipbox';

@Component({
  selector: 'app',
  template: `<apf-flipbox></apf-flipbox>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FlipBoxModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
