import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	imagearr = ["assets/slider-1.jpg","assets/slider-2.jpg","assets/slider-3.jpg"];
  constructor() {
  }

  ngOnInit() {
  }

}
