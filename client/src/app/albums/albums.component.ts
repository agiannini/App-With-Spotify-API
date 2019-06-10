import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
@Input() ID
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getURL() {
  //  console.log("The ID is"+this.ID)
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/album/"+this.ID);
  }
}
