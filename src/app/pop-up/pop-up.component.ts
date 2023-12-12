import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  @Input() item:any
  constructor( public activemodel:NgbActiveModal){
  
  }
  
  
  saveChanges(){
    this.activemodel.close("Save click")
  }
}
