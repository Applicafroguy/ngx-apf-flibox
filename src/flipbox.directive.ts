import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[flipboxDirective]'
})
export class FlipBoxDirective {

  constructor(private el: ElementRef) {
  }

}
