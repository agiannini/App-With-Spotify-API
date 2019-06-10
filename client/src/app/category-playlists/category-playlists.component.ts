import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '.././api.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-category-playlists',
  templateUrl: './category-playlists.component.html',
  styleUrls: ['./category-playlists.component.css']
})

export class CategoryPlaylistsComponent implements OnInit {

  CategoryID = "";
  playlists = {};
  results = [];

  constructor(private route: ActivatedRoute, private api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getCategory();
  }


  // Purpose: to get the category ID from the URL
  getCategory(): void {
    this.route.params.subscribe((params) => {
       this.CategoryID = params['id'];

       this.api.getPlaylists(this.CategoryID).subscribe((playlistsData) => {
         this.playlists = playlistsData["playlists"]["items"];
         this.cleanPlaylistData(this.playlists);
       })

     });
  }

// Removes the excess data from the JSON object
cleanPlaylistData(data){
  console.log("Here is Data"+data);
  for (var datum in data){
    this.results.push(data[datum].id);
  }
  
  console.log("Here is results"+this.results);
}
  getURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/playlist/" + this.results);
  }
}
