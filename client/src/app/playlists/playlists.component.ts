import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  @Input() playlist;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  //Sanitizes the URL so it can be dispalyed in the iframe
  getURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/playlist/"+this.playlist);
  }
}
