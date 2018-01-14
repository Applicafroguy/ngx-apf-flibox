import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipBoxComponent } from './flipbox.component';
import { FlipBoxDirective } from './flipbox.directive';


export * from './flipbox.component';
export * from './flipbox.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlipBoxComponent,
    FlipBoxDirective,
  ],
  exports: [
    FlipBoxComponent,
    FlipBoxDirective,
  ]
})
export class FlipBoxModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlipBoxModule,
    };
  }
}
