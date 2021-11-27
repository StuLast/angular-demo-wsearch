import { Component, OnInit, Input } from '@angular/core';

export interface IPage {
  title: string;
  wordcount: string;
  snippet: string;
  pageid: number;
}

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: IPage[] = [];
  constructor() {}

  ngOnInit(): void {}
}
