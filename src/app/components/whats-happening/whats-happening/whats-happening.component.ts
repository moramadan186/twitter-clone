import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { ColorThemeService } from 'src/app/services/color-theme.service';
import Article from 'src/app/models/article';
import Trending from 'src/app/models/trending';
import Promotion from 'src/app/models/promotion';

@Component({
  selector: 'app-whats-happening',
  templateUrl: './whats-happening.component.html',
  styleUrls: ['./whats-happening.component.css'],
})
export class WhatsHappeningComponent implements OnInit {
  public colorTheme: Theme;
  public articles: Article[];
  public trending: Trending[];
  public promotions: Promotion[];

  constructor(private colorThemeService: ColorThemeService) {}

  ngOnInit(): void {
    this.colorThemeService.ColorTheme$.subscribe((data) => {
      this.colorTheme = data;

      this.articles = [
        {
          category: 'Premier League · Yesterday',
          body:
            'Liverpool vs Crystal Palace',
          img: './assets/images/liverpool.jpg',
          trendingWith:"Jota"
        },
        {
          category: 'Football · Last night',
          body:
            'جوارديولا يصطدم بغضب جماهير مانشستر سيتي',
          img: './assets/images/juardula.jpg',
          trendingWith:"mo salah"
        },
      ];

      this.trending = [
        {
          category: 'Trending in Egypt',
          content: 'صلاح',
          numOfTweets: '24.9K',
        },
        {
          category: 'Trending in Egypt',
          content: '#انترنت_غير_محدود_في_مصر',
          numOfTweets: '97.6K',
        },
      ];

      this.promotions = [
        {
          mainContent: '#COVID-19 . LIVE 😷',
          secondaryContent: 'Vaccines: Know the Facts',
          thirdContent: '↗ Promoted by COVID-19',
        },
      ];
    });
  }
}
