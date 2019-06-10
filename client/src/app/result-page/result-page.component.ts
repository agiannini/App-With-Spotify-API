import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '.././api.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) { }
  artistID = ""
  artistAlbums = [];
  // compares names to identify duplicates
  duplicateCheck = [];
  artistName = "";
  ngOnInit() {
    this.artistID = this.route.snapshot.paramMap.get('id');

    this.api.getArtist(this.artistID).subscribe((data) => {
      this.artistName = data["name"];
    });

    this.api.getAlbums(this.artistID).subscribe((data) => {
      this.getData(data["items"]);
    });
  }

  // Purpose: to isolate the id and exclude albums with duplicate names
  getData(data) {
  //  console.log(data);
    for (var items in data) {
      if (this.duplicateCheck.indexOf(data[items].name) == -1) {
        this.duplicateCheck.push(data[items].name);
        this.artistAlbums.push(data[items].id);
      }
    }
  }

}
