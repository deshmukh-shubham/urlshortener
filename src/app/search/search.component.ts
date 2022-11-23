import { Component, OnInit } from '@angular/core';
import { ShortenService } from '../service/shorten.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  url : string = '';
  code : string = '';
  short_link :string = '';
  full_short_link :string = '';
  short_link2 :string = '';
  full_short_link2 :string = '';
  
  constructor(private _service:ShortenService) { }

  ngOnInit(): void {
  }

  getUrl(){
    this.url = (<HTMLInputElement>document.getElementById("url")).value;
    console.log(this.url); 
    this._service.getData(this.url).subscribe((data) => {
      if(data.ok == true)
      {
        console.log("Component data from service "+data.ok);

        this.code = data.result.code;
        this.short_link = data.result.short_link;
        this.full_short_link = data.result.full_short_link;
        this.short_link2 = data.result.short_link2;
        this.full_short_link2 = data.result.full_short_link2;
      }
      else if(data.ok == false)
      {
        console.log("Component data from service "+data.ok);
        console.log(data.error);
      }
    })
  }
}
