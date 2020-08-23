import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite = true; // input property
  @Output('changeIcon') changeIcon = new EventEmitter(); // output property
  onClick(): void {
    this.isFavorite = !this.isFavorite;
    this.changeIcon.emit({ newValue: this.isFavorite }); // 这里需要 emit，否则不会触发 changeIcon 这个event
  }
  constructor() {}

  ngOnInit(): void {}
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
