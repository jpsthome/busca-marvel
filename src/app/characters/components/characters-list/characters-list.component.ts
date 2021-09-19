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
  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe((res) => {
      this.characters = res;
      console.log(this.characters);
    });
  }
}
