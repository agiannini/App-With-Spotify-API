import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '.././api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() category // Capitalize Input!
  constructor(private api:ApiService) { }
  pictureURL = "";
  ngOnInit() {
    this.getPicture(this.category.href);
  }
  getPicture(url:string){
    this.api.callURL(url).subscribe((data)=>{
      this.pictureURL = data["icons"]["0"].url;
      console.log(this.pictureURL);
    });
  }

}
