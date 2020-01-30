import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe<T = any> implements PipeTransform {
  public transform(values: Array<T>, compareFn: (a: T, b: T) => number): Array<T> {
    return values.sort(compareFn);
  }
}
