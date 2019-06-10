import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.css']
})
export class NewReleaseComponent implements OnInit {
  allItems = [];
  constructor( private api:ApiService, private sanitizer: DomSanitizer ) { }

  ngOnInit() {

    this.api.getNewReleases().subscribe((data) => {
      this.allItems = data["albums"]["items"];
      console.log(data);
    });
  }

  //Sanitizes the URL so it can be dispalyed in the iframe
  getURL(AlbumID) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/album/"+AlbumID);
  }

}
