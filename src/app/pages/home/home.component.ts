import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('10s', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, height: '*' }),
        animate('10s', style({ opacity: 0, height: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  public show = true;
}
