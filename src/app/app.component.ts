import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { NewsService } from './shared/news.service';
import { NewsModel } from './shared/news.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  searchText = "";
  resultSet : any;

  constructor(private newsService : NewsService) { }

  searchNews($event){
   
     this.searchText = $event.form.controls["searchText"].value;

     this.newsService.GetGaurdianSearchResult(this.searchText)
     .subscribe((result) => {
        this.resultSet = result;
        this.newsService.newsArticles = [];
        this.resultSet.response.results.forEach(element => {
                console.log(this.newsService.CusotomMapper(element));
        
        this.newsService.newsArticles.push(this.newsService.CusotomMapper(element))
      })
  
    })
  }

  filterNews(text: string)
  {
    console.log(text);
  
    // this.newsService.GetSearchResult(text)
    this.newsService.GetGaurdianSearchResult(text)
    .subscribe((result) => {
      this.newsService.newsArticles = [];
      this.resultSet = result;
      this.resultSet.response.results.forEach(element => {
           this.newsService.newsArticles.push(this.newsService.CusotomMapper(element));
    })
  
  })

}
}

