import { animate, AnimationTriggerMetadata, group, style, transition, trigger } from '@angular/animations';

export const DEFAULT_ENTER_LEAVE_ANIMATION_NAME = 'enterLeave';
export const DEFAULT_ENTER_LEAVE_ANIMATION_DURATION = 250;

interface IEnterLeaveAnimationOptions {
  triggerName: string;
  duration: number;
}

const hiddenStyle = style({
  height: 0,
  opacity: 0,
  marginTop: '0px',
  marginBottom: '0px',
});

const visibleStyle = style({
  height: '*',
  opacity: 1,
  marginTop: '*',
  marginBottom: '*',
});

const centerStyle = style({
  transform: 'translateX(0)',
});

const leftStyle = style({
  transform: 'translateX(-50vw)',
});

const rightStyle = style({
  transform: 'translateX(50vw)',
});

export function enterLeaveAnimation({
  triggerName = DEFAULT_ENTER_LEAVE_ANIMATION_NAME,
  duration = DEFAULT_ENTER_LEAVE_ANIMATION_DURATION,
}: IEnterLeaveAnimationOptions = {
  triggerName: DEFAULT_ENTER_LEAVE_ANIMATION_NAME,
  duration: DEFAULT_ENTER_LEAVE_ANIMATION_DURATION,
}): AnimationTriggerMetadata {
  return trigger(triggerName, [
    transition(':enter', [
      hiddenStyle,
      leftStyle,
      group([
        animate(`${duration}ms ease-out`, visibleStyle),
        animate(`${duration}ms ease-out`, centerStyle),
      ]),
    ]),
    transition(':leave', [
      visibleStyle,
      centerStyle,
      group([
        animate(`${duration}ms ease-out`, hiddenStyle),
        animate(`${duration}ms ease-out`, rightStyle),
      ]),
    ]),
  ]);
}
