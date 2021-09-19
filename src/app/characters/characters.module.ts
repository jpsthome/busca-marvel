import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [CommonModule, SharedModule],
})
export class CharactersModule {}
