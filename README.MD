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
  [iconCode]="iconCode" 
  [backTitle]="backTitle" 
  [backContent]="backContent">
  </apf-flipbox>
```
## Inputs
```bash
| Input         | Description                         | Data Type      | Example                               |
| ------------- |:-----------------------------------:| --------------:| -------------------------------------:|
| frontTitle    | Front Title                         | string         | "Mobile Phones"                       |
| frontSubTitle | Front SubTitle                      | string         | "smart"                               |
| iconCode      | font awesome css class              | array          | ['fa','fa-address-card-o' , 'fa-3x']  |
| backTitle     | Back Title                          | string         | "Mobile Phones Are Smart"             |
| backContent   | Back Description                    | string         | "I am A description for Mobile Phone."|
```
## License

MIT © [Sivuyile Magutywa](mailto:s.magutywa@applicafro.co.za)
