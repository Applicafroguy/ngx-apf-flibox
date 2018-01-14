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

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<apf-flipbox></apf-flipbox>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Sivuyile Magutywa](mailto:s.magutywa@applicafro.co.za)
