import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GuestServiceService {

  constructor(public http: HttpClient) { }

  getMessage(){
  	return this.http.get("https://my.api.mockaroo.com/adminmessage.json?key=72e62470");
  }

  addData(log){
  	return this.http.post("https://my.api.mockaroo.com/contact-form.json?key=72e62470&__method=POST",log
);
  }

}