import { Component } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public data:any=[
    {
      id:1,name:"john",
    
    },
    {
      id:2,name:"joy",
    
    
    },
    {
      id:3,name:"sam"
    
    }
  ]
    constructor( private modalService:NgbModal){
  
    }
  
    ngOnInit(): void {
      
    }
    openEditPopUp(data:string){
      const dataservices=this.modalService.open(PopUpComponent);
      dataservices.componentInstance.item=data;
      dataservices.result.then((result)=>{
        console.log("edited")
      },(reson)=>{
        console.log(":not edited")
      })
    }
}
