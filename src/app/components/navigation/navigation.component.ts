import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ILink {
  url: string;
  label: string;
  exact: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public links: Array<ILink> = [{
    url: '/',
    label: 'Home',
    exact: true,
  }, {
    url: 'users',
    label: 'Users',
    exact: false,
  }];
}
