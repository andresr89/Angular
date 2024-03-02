import { Component,} from '@angular/core';

@Component({
 selector: 'gifs-search-box',
  template: `
   <h5>Buscar:</h5>
    <input type="text"
     class="form-cotrol"
     placeholder="Buscar gifs ..."
    >

  `

})

export class SearchBoxComponent  {
  constructor() { }
}
