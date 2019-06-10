import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

let token="BQDGjMY6wZmeY5dzAoCRj72uU7OqofzhLDjD7Zsufxu-uBDkzFJJxpzQRjTPG7TFBVRngwoIhE_Lte8m99Y";
let myHeader = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer '+ token,
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


//Resets the Header
getToken(){
  this.http.get("/api").subscribe((data) => {
  //  console.log("the API return is"+data["name"]);
    myHeader = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ data["name"],
        'Content-Type':  'application/json'
      })
    };
  });
}

getSearch(query){
  this.getToken();
  console.log("search");
  return this.http.get("https://api.spotify.com/v1/search?q="+query+"&type=artist", myHeader);
}

getAllCategories() {
  this.getToken();
  console.log("Categories");
    return this.http.get("https://api.spotify.com/v1/browse/categories", myHeader)
  }
callURL(url){
//  this.getToken();
//  console.log("CallURL");
  return this.http.get(url, myHeader);
}
getPlaylists(categoryID){
  this.getToken();
  console.log("Playlists");
  return this.http.get("https://api.spotify.com/v1/browse/categories/"+categoryID+"/playlists", myHeader);
}
getAlbums(artistID){
  this.getToken();
  console.log("Albums");
  return this.http.get("https://api.spotify.com/v1/artists/"+artistID+"/albums?limit=50", myHeader);
}
getArtist(artistID){
  this.getToken();
  console.log("getArtist");
  return this.http.get("https://api.spotify.com/v1/artists/"+artistID, myHeader);
}

getNewReleases(){
  this.getToken();
  console.log("NewReleases");
  return this.http.get("https://api.spotify.com/v1/browse/new-releases", myHeader);
}

}
