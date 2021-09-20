import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '@characters/models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'marvel-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  charactersName: string = '';
  loading = true;
  pages: number = 0;
  currentPage: number = 0;
  lastPage: number = 5;
  constructor(
    private characterService: CharactersService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe((res) => {
      this.loading = false;
      this.characters = res.results;
      this.pages = Math.floor(res.total / 10);
    });
  }

  characterDetail(characterId: number) {
    this._router.navigate(['', characterId]);
  }

  pageCounter(i: number) {
    const array = [
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
      this.currentPage + 3,
      this.currentPage + 4,
    ];
    return array;
  }

  getCharactersPage(page: number) {
    this.currentPage = page;
    this.lastPage = page + 5;
    this.loading = true;
    if (this.charactersName) {
      this.characterService
        .getCharactersByName(this.charactersName, page)
        .subscribe((res) => {
          this.characters = res.results;
          this.loading = false;
        });
    } else {
      this.characterService.getCharacters(page).subscribe((res) => {
        this.characters = res.results;
        this.loading = false;
      });
    }
  }
  updateCharactersName(e: string) {
    this.charactersName = e;
    this.loading = true;
    if (e) {
      this.characterService.getCharactersByName(e).subscribe((res) => {
        this.characters = res.results;
        this.loading = false;
      });
    } else {
      this.characterService.getCharacters().subscribe((res) => {
        this.characters = res.results;
        this.loading = false;
      });
    }
  }
}
