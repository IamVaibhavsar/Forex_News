import { Injectable } from '@angular/core';
import { NewsModel } from './news.model';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class NewsService {
newsArticles : NewsModel[] = [];
temp:NewsModel = new NewsModel;


gaurApiKey = "bd636a5e-6518-4e03-a4d9-16661af68960";
gaurUrl = "http://content.guardianapis.com/search?show-fields=all&page-size=20&api-key=";
gaurSectionUrl = "https://content.guardianapis.com/search?show-fields=all&page-size=20&q="




  constructor(public http:HttpClient) { }

  GetAllGaurdian()
  {
    return this.http.get(this.gaurUrl + this.gaurApiKey);
  }

  GetGaurdianSearchResult(section:string)
  {
    return this.http.get(this.gaurSectionUrl + section + "&api-key=" + this.gaurApiKey );
  }

 public CusotomMapper(item) : NewsModel{
          
    this.temp = new NewsModel;
      this.temp.thumbnail = item["fields"].thumbnail;
      this.temp.sectionId= item["sectionId"];
      this.temp.webPublicationDate = item["webPublicationDate"];
      this.temp.webTitle = item["webTitle"];
      this.temp.webUrl = item["webUrl"];
      this.temp.trailText = item["fields"].trailText;
      return this.temp;
  }

  

}

