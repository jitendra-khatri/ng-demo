import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maid-information',
  templateUrl: './maid-information.component.html',
  styleUrls: ['./maid-information.component.css']
})
export class MaidInformationComponent implements OnInit {

  userImgPath:string;
  
  constructor() { 
    this.userImgPath = '/assets/images/user-icon.png';


  }

  ngOnInit() {
  }

  SearchAgain(){

  }

}
