import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@characters/models/character.model';

@Component({
  selector: '[marvel-character-row]',
  templateUrl: './character-row.component.html',
  styleUrls: ['./character-row.component.scss'],
})
export class CharacterRowComponent implements OnInit {
  @Input() character: Character = <Character>{};

  constructor() {}

  ngOnInit(): void {}
}
