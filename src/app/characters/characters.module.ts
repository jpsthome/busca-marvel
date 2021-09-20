import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CharactersSearchComponent } from './components/characters-list/characters-search/characters-search.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterRowComponent } from './components/characters-list/character-row/character-row.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterRowComponent,
    CharactersSearchComponent,
    CharacterDetailsComponent,
  ],
  imports: [CommonModule, SharedModule, FontAwesomeModule, RouterModule],
})
export class CharactersModule {}
