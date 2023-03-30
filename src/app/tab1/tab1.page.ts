import { Component } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
openModal(_t11: any) {
throw new Error('Method not implemented.');
}
  allCharacters: any;

  constructor(
    private randmService: RickAndMortyService,

    ) { }

  ngOnInit() {
    this.randmService.getAllCharacters().then( (res: any) => {
      this.allCharacters = res;
      console.log (this.allCharacters);
    });
}
}
