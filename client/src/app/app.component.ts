import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Spotify App';

  categoryData = null;
  constructor(private api:ApiService) {}
  ngOnInit() {
//    console.log(this.api.getToken());
       this.api.getAllCategories().subscribe((data)=>{
           this.categoryData = data["categories"].items;
     });
   }
}
