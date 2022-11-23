import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShortenService {

  base_URL = 'https://api.shrtco.de/v2';

  constructor(private _http:HttpClient) { }

  getData(data:string)
  {
    let result = data;
    // console.log("URL from component "+result);

    //It will work only when URL having www otherwise it will not work.
    let spliturl = result.split("www.",2);
    // console.log(spliturl);

    let main_URL = spliturl[1];
    // console.log(main_URL);

    //Instead of <any> we can implement interface also in order to get data in proper order.
    return this._http.get<any>(this.base_URL+'/shorten?url='+main_URL);
  }
}
