import { Component, OnInit } from '@angular/core';
import { GuestServiceService } from '../guest-service.service';
@Component({
  selector: 'app-infohome',
  templateUrl: './infohome.component.html',
  styleUrls: ['./infohome.component.css']
})
export class InfohomeComponent implements OnInit {
	message:any;
  constructor(public _guestService: GuestServiceService) { }

  ngOnInit() {
  	this.getMessage();
  }

  getMessage(){
  	this._guestService.getMessage().subscribe(res=>{
  		console.log(res);
  	},err=>{
  		console.log(err);
  	})
  }

}
