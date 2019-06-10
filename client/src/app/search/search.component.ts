import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '.././api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = "";
  searchResults = [];
  cleanedResults = [];
  constructor( private route: ActivatedRoute, private api: ApiService ) { }

  ngOnInit() {
    // Subscribing instead of snapshot allows for searching from a search page
    this.route.params.subscribe((params) => {
       this.searchTerm = params['term'];
       this.searchSpotify();
     });
  }

// Purpose:  To get search results from Spotify API
  searchSpotify(){
    this.api.getSearch(this.searchTerm)
    .subscribe((data) => {
      this.searchResults = data["artists"]["items"];
      console.log(this.searchResults);
    //  this.sanitizeData(data);
    });
  }



}




//{{searchResults.artists.items["0"].name}}
//{{searchResults.artists.items["0"].id}}
