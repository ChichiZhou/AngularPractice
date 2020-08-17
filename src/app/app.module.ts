import { AppErrorHandler } from './common/app-error-handlers';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './courses/summary.pipe';
import { HttpClientModule } from '@angular/common/http'; // 引入的时候，引入 HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    PostsComponent,
    GithubFollowersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
