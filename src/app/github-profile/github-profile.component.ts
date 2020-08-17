import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // 给出这个 route 的所有 parameter
    this.activatedroute.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log(id);
    });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
}
