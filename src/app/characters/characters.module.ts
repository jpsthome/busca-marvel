import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterRowComponent } from './components/characters-list/character-row/character-row.component';

@NgModule({
  declarations: [CharactersListComponent, CharacterRowComponent],
  imports: [CommonModule, SharedModule],
})
export class CharactersModule {}
