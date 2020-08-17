import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
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
    this.posts.splice(0, 0, post); // 乐观法，意思是先显示出来

    input.value = '';
    this.service.create(post).subscribe(
      (newPost) => {
        post['id'] = newPost.id;
        console.log(newPost);
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          // this.form.setErrors(error.json());
          // this.form.setErrors(error.originalError);
        } else {
          throw error; // 直接 throw 即可
        }
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe(
      (updatedPost) => {
        console.log(updatedPost);
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

  deletePost(post) {
    this.service.delete(post.id).subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1); // 悲观做法
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) alert('This post already deleated');
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
    // this.service.getAll().subscribe((response) => {
    //   this.posts = response as any; // 区别在这里，并不知道为什么？？？？
    // });

    this.service.getAll().subscribe((posts) => {
      this.posts = posts as any; // 区别在这里，并不知道为什么？？？？
    });
  }
}
