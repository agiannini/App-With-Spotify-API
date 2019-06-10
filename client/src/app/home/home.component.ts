import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit() {
  }
  getURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/album/6zgCsYTyMyvBLqcv51KLXS");
  }

}
