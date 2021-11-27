import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { IPage } from './page-list/page-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: IPage[] = [];
  constructor(private wikipedia: WikipediaService) {}

  onSearchTerm = (term: string): void => {
    this.wikipedia.search(term).subscribe((response: any) => {
      console.log(response.query.search);
      this.pages = response.query.search;
    });
  };
}
