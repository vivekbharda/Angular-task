import { Component, OnInit } from '@angular/core';
import { GuestServiceService } from '../guest-service.service';
@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	details = {
		Name:"",
		Email:"",
		PhoneNo:"",
		Message:""
	};
	constructor(public _guestService: GuestServiceService) { }

	addData = function(){
		if (this.details.Name.length==0) {
			alert('name is require');
			if (!this.details.Name.match(/^[A-Za-Z]/)) {
				alert('invalid');
			}
		}
		this._guestService.addData(this.details).subscribe(res=>{
			console.log("response",res);
		},err=>{
			console.log("error",err);
		})
	}

	ngOnInit() {
	}

}
