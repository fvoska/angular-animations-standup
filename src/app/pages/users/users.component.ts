import { animateChild, query, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { enterLeaveAnimation } from '../../animations/enter-leave.animation';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    enterLeaveAnimation(),
    trigger('pageAnimations', [
      transition(':enter, :leave', [
        query('@enterLeave', animateChild()),
      ]),
      // transition(':enter', [
      //   style({opacity: 0 }),
      //   animate('2500ms ease-in-out', style({ opacity: 1 })),
      // ]),
      // transition(':leave', [
      //   style({opacity: 1 }),
      //   animate('2500ms ease-in-out', style({ opacity: 0 })),
      // ]),
    ]),
  ],
})
export class UsersComponent {
  @HostBinding('@pageAnimations')
  public animatePage = true;

  public username: string;
  public animationDisabled = false;

  public users: Array<User> = [
    new User('Stan'),
    new User('Kyle'),
    new User('Kenny'),
    new User('Cartman'),
  ];

  public onFormSubmit(): void {
    this.users = [...this.users, new User(this.username)];
  }

  public compareUser(a: User, b: User): number {
    return a.username.localeCompare(b.username);
  }

  public onRemoveUser(userToRemove: User): void {
    this.users = this.users.filter((user) => userToRemove !== user);
  }
}
