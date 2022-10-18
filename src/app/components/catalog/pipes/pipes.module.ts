import { NgModule } from '@angular/core';
import { SearchByTagPipe } from './search-by-tag.pipe';
import { SortByValuePipe } from './sort-by-value.pipe';

@NgModule({
  declarations: [
    SearchByTagPipe,
    SortByValuePipe
  ],
  exports: [
    SearchByTagPipe,
    SortByValuePipe
  ],
})
export class PipesModule {}
