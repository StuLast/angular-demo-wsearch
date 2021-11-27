import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private wikipedia: WikipediaService
  ) {}
  
  onSearchTerm = (term: string):void => {
    const results = this.wikipedia.search(term);
    console.log(results)
  }
}
