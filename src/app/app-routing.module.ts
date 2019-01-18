import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact-us/contact.component';
import {GalleryComponent} from './gallery/gallery.component';

const routes: Routes = [
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'contactUs',
		component:ContactComponent
	},
	{
		path:'gallery',
		component:GalleryComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
