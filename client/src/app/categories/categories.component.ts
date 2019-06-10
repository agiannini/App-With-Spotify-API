import { Component, OnInit } from '@angular/core';
import {ApiService} from '.././api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryData = [];
  constructor(private api:ApiService) {}

  ngOnInit() {
       this.api.getAllCategories().subscribe((data)=>{
    //      console.log("data is"+data["categories"].items["0"].id)
           //this.categoryData = data["categories"].items;
           this.cleanData(data["categories"].items);

     });

   }
   cleanData(items){
     for (var item in items){
       this.categoryData.push(items[item]);


// For cleaning empty playlists
//       this.api.getPlaylists(items[item].id).subscribe((playlistsData) => {
//         if  (playlistsData["playlists"]["items"]["length"] != 0 ){
//            this.categoryData.push(playlistsData["playlists"]);
//          }
//         }
//       );
     //}

 }



}
}
