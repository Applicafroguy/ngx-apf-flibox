import { FlipBoxModule } from 'ngx-apf-flipbox';
/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app',
  template: `<apf-flipbox
  [frontTitle]="'Mobile Application 2'"
  [frontSubTitle]="'NATIVE & HYBRID APPS'"
  [iconCode]="['fa', 'fa-camera-retro' , 'fa-3x']"
  [backTitle]="Back Title"
  [backContent]="'This is a back side content'"
  [frontBGColor]="'#c2c2c2'"
  [backBGColor]="'#cac'"
  [iconColor]="'#fff'"
  [frontTitleColor]="'#000'"
  [frontSubTitleColor]="'#000'"
  [backTitleColor]="'#000'"
  [backContentColor]="'#000'"
  ></apf-flipbox>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FlipBoxModule ]
})
class AppModule {
  frontTitle = 'Mobile Application 2';
  frontSubTitle = 'NATIVE & HYBRID APPS';
  iconCode= ['fa', 'fa-camera-retro' , 'fa-3x'] ;
  backTitle= 'Back Title';
  backContent = 'This is a back side content';
}

platformBrowserDynamic().bootstrapModule(AppModule);
