import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[];
  constructor(private tweetsService:usersService) { }
  ngOnInit(): void {
    this.tweetsService.getTweets().subscribe(
      tweetsData=>{this.tweets=tweetsData},
      tweetsError=>{console.log(tweetsError.message)}
    )
  }
}
