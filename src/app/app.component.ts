import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeChangeAnimation } from './animations/route-change.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeChangeAnimation],
})
export class AppComponent {
  public prepareRoute(outlet: RouterOutlet): string {
    if (outlet.activatedRouteData) {
      return outlet.activatedRouteData.animationState;
    }

    return null;
  }
}
