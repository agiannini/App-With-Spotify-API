import { Component, OnInit } from '@angular/core';
import {ApiService} from '.././api.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  categories = [];
  query: any = {};

  constructor(private api:ApiService, private router: RouterModule) { }

  ngOnInit() {
  //  this.api.getAllCategories().subscribe((data) =>{
    //  this.cleanData(data["categories"].items)
  //})
  }


// *** cleans
//cleanData(data){
//  for (var item in data){
//    this.categories.push(data[item].id);
//  }
//}


}
