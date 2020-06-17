import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { NewsModel } from '../shared/news.model';
import { Form } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  articles : any;
  temp : NewsModel = new NewsModel;
  constructor(private newsService : NewsService) { }

  ngOnInit() {
      this.FetchHeadlines();
           }

  FetchHeadlines()
  {
     this.newsService.GetAllGaurdian()
        .subscribe((result) =>
        {
          this.articles = result;
                  this.articles.response.results.forEach(element => {
                       this.newsService.newsArticles.push(this.newsService.CusotomMapper(element));
          });
        }) 
  }
}
