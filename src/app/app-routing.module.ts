import { CharacterDetailsComponent } from './characters/components/character-details/character-details.component';
import { CharactersListComponent } from './characters/components/characters-list/characters-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent,
  },
  {
    path: ':id',
    component: CharacterDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
