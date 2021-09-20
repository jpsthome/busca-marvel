import { MarvelEvent } from './../../models/marvel-event.model';
import { Series } from './../../models/series.model';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@characters/models/character.model';

import { faPlay, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'marvel-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  characterId: number;
  character: Character;
  events: MarvelEvent[] = [];
  series: Series[] = [];

  faPlay = faPlay;
  faArrowLeft = faArrowLeft;

  isSeriesExpanded = false;
  isEventsExpanded = false;
  constructor(
    private _route: ActivatedRoute,
    private characterService: CharactersService
  ) {}

  ngOnInit(): void {
    this.characterId = parseInt(this._route.snapshot.paramMap.get('id')!);

    this.getCharacter();
  }
  getCharacter() {
    this.characterService
      .getCharacterById(this.characterId)
      .subscribe((res) => {
        console.log(res.results[0]);
        this.character = res.results[0];
        this.getEvents();
        this.getSeries();
      });
  }
  getSeries() {
    this.characterService
      .getSeriesByURI(this.character.series.collectionURI)
      .subscribe((res) => {
        this.series = res.results;
        console.log(this.series);
      });
  }
  getEvents() {
    const events = this.character.events;
    console.log(events.collectionURI);
    if (events.collectionURI) {
      this.characterService
        .getEventsByURI(this.character.events.collectionURI)
        .subscribe((res) => {
          this.events = res.results;
          console.log(this.events);
        });
    }
  }

  expandSeries() {
    this.isSeriesExpanded = !this.isSeriesExpanded;
  }
  expandEvents() {
    this.isEventsExpanded = !this.isEventsExpanded;
    console.log(this.isEventsExpanded);
  }
}
