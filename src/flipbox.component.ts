import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'apf-flipbox',
  templateUrl: 'flipbox.component.html',
  styleUrls: ['flipbox.component.css']
})
export class FlipBoxComponent implements OnInit {

  /**
   * Default
   */
  box_shadow_padds = '0 0 0 0.1em ';
  box_shadow_inset = ' inset';
  /**
   * Front Side Inputs
   */

   // Text
  @Input() frontTitle;
  @Input() frontSubTitle;

  // Color Setting
  @Input() frontBGColor;
  @Input() frontTitleColor;
  @Input() frontSubTitleColor;

  // Icon
  // Must Specify Font and Icon
  @Input() iconCode: any[] = ['fa', 'fa-address-card-o' , 'fa-3x'] ;
  @Input() iconColor;
  @Input() iconCicleColor;
  // ******************************************************************
  /**
   *  Back Side Inputs
   */

   // Text
  @Input() backTitle;
  @Input() backContent;

  // Color Setting
  @Input() backBGColor;
  @Input() backTitleColor;
  @Input() backContentColor;

  // ******************************************************************
  /**
   * Constructor
   */
  constructor() {

  }

  ngOnInit(): void {
  }
}
