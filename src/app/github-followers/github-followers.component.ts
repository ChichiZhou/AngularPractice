import { Observable, combineLatest } from 'rxjs';
import { GithubFollowersService } from './../github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit(): void {
    // get query parameters
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      (combined) => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        console.log(id);
        console.log(page);
      }
    );

    this.service
      .getAll()
      .subscribe((followers) => (this.followers = followers as any));
  }
}
