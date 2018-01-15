import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

interface Front {
  title: string;
  subtitle: string;
  icon: string;

}

interface Back {
  title: string;
  content: string;

}

@Component({
  selector: 'apf-flipbox',
  templateUrl: 'flipbox.component.html',
  styleUrls: ['flipbox.component.css']
})
export class FlipBoxComponent implements OnInit {

  @Input() frontTitle;
  @Input() frontSubTitle;
  @Input() iconCode: any[] = ['fa', 'fa-address-card-o' , 'fa-3x'] ;
  @Input() backTitle;
  @Input() backContent;

  constructor() {

  }

  ngOnInit(): void {
   
  }
}
