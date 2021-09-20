import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '@characters/models/character.model';

@Component({
  selector: 'marvel-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  charactersName: string = '';
  loading = true;
  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe((res) => {
      this.loading = false;
      this.characters = res;
      console.log(this.characters);
    });
  }

  characterDetail(characterId: number) {
    this.characterService.getCharacterById(characterId).subscribe((res) => {
      console.log(res);
    });
  }

  updateCharactersName(e: string) {
    this.charactersName = e;
    this.loading = true;
    if (e) {
      this.characterService.getCharactersByName(e).subscribe((res) => {
        this.characters = res;
        this.loading = false;
      });
    } else {
      this.characterService.getCharacters().subscribe((res) => {
        this.characters = res;
        this.loading = false;
      });
    }
  }
}
