# ngx-apf-flipbox

## Installation

To install this library, run:

```bash
$ npm install ngx-apf-flipbox --save
```

## Usage

```bash
$ npm install ngx-apf-flipbox
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { FlipBoxModule } from 'ngx-apf-flipbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    FlipBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<apf-flipbox
  [frontTitle]="frontTitle" 
  [frontSubTitle]="frontSubTitle"
  [frontTitleColor]="'#000'"
  [frontSubTitleColor]="'rgba(255,255,255,0.5)'" 
  
  [iconCode]="iconCode" 
  [iconColor]="'#fff'"
  [iconCicleColor]="'#fff'"

  [backTitle]="backTitle" 
  [backContent]="backContent" 
  [backTitleColor]="'rgba(255,255,255,0.5)'" 
  [backContentColor]="'#000'">
  </apf-flipbox>
```
## Inputs
```bash
| Input              | Description               | Data Type | Example                               |
| -------------------|:-------------------------:| ---------:| -------------------------------------:|
| # Front                                                                                            |
| frontTitle         | Front Title               | string    | "Mobile Phones"                       |
| frontSubTitle      | Front SubTitle            | string    | "smart"                               |
| iconCode           | font awesome css class    | array     | ['fa','fa-address-card-o' , 'fa-3x']  |
| iconColor          | Icon Color                | string    | "#fff"                                |
| iconCicleColor     | Icon Color                | string    | "rgba(255,255,255,0.5)"               |
| frontTitleColor    | Front Side Title Color    | string    | "rgba(255,255,255,0.5)"               |
| frontSubTitleColor | Front Side Subtitle Color | string    | "#fff"                                |
|----------------------------------------------------------------------------------------------------|
| # Back                                                                                             |
| backTitle          | Back Title                | string    | "Mobile Phones Are Smart"             |
| backContent        | Back Description          | string    | "I am A description for Mobile Phone."|
| backTitleColor     | Back Side Title Color     | string    | "#fff"                                |
| backContentColor   | Back Side Content Color   | string    | "#fff"                                |
```
## License

MIT © [Sivuyile Magutywa](mailto:s.magutywa@applicafro.co.za)
