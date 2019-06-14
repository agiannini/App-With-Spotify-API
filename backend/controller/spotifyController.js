const https = require('http');

class SpotifyService {

  static getToken(){
//    return "Hello!";
    https.get("http://localhost:3000/api", (resp) =>
  {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
    });//    return data["name"];

  })
//    .then((data) => {
//      console.log("the API return is"+data["name"]);
//      myHeader = {
//        headers: new HttpHeaders({
//          'Authorization': 'Bearer '+ data["name"],
//          'Content-Type':  'application/json'
//        })
//      };
//    });
//    return myHeader;
//  }
}
}


module.exports.SpotifyService = SpotifyService;
