import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [SortPipe],
  exports: [SortPipe],
  imports: [
    CommonModule,
  ],
})
export class PipesModule { }
