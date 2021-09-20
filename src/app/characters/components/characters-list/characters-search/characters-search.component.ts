import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  tap,
} from 'rxjs/operators';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'marvel-characters-search',
  templateUrl: './characters-search.component.html',
  styleUrls: ['./characters-search.component.scss'],
})
export class CharactersSearchComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  searchTerm = new Subject<string>();

  @Output() charactersNameEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}
  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          const text = this.searchInput.nativeElement.value;
          this.charactersNameEmitter.emit(text);
        })
      )
      .subscribe();
  }
}
