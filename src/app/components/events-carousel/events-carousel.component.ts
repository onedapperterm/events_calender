import { Component, Input } from '@angular/core';
import { interval, map } from 'rxjs';
import { CityEvent } from 'src/app/model/interfaces/event.interface';

@Component({
  selector: 'app-events-carousel',
  templateUrl: './events-carousel.component.html',
  styleUrls: ['./events-carousel.component.scss']
})
export class EventsCarouselComponent {
  @Input() events!: CityEvent[] | null;
  private slide: number = -1;

  public offset$ = interval(2000) .pipe(
    map(x => this.getOffset())
  )

  private getOffset(): string {
    if(this.slide > 8) this.slide = -1;
    else this.slide++;
    return '-' + this.slide + '00%';
  }

}
