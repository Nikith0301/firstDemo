import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http:HttpClient) {
    console.log("service fetching")
   }
  // constructor(){}
  getList(){
    return[
      {'grade':1, 'name':'Davido', 'country':'Nigeria'},
      {'grade':2, 'name':'Burna Boy', 'country':'Nigeria'},
      {'grade':3, 'name':'Diamondz Platinum', 'country':'Tanzania'},
      {'grade':4, 'name':'Sarkodie', 'country':'Ghana'},
      {'grade':5, 'name':'Mr. Eazi', 'country':'Nigeria'}
    ];
  }


  getPosts() {
    return this.http.get(this.url);
  }

}
