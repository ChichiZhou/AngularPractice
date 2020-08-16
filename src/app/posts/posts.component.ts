import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http'; // 使用的时候，用 HttpClient
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[];

  // constructor 不能有太多的操作，应当短小精悍
  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(
      (response) => {
        post['id'] = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
      },
      (error: Response) => {
        if (error.status === 400) {
          // this.form.setErrors(error.json());
        } else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      }
    );
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

  deletePost(post) {
    this.service.deletePost(post).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) alert('This post already deleated');
        else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      }
    ); // 这里需要 subscribe，因为需要更新 posts，用来显示所有的 item
  }

  // 如果有需要进行初始化的，可以放在 ngOnInit 中
  ngOnInit(): void {
    // get data from server
    this.service.getPosts().subscribe(
      (response) => {
        this.posts = response as any; // 区别在这里，并不知道为什么？？？？
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }
}
