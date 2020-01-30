import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() public user: User;
  @Output() public remove: EventEmitter<User> = new EventEmitter();

  public onRemoveClick(): void {
    this.remove.emit(this.user);
  }
}
