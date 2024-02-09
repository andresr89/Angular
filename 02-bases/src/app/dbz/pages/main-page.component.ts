import { Character } from './../interfaces/character.interface';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl:'main-page.component.html'
})

export class MainPageComponent {

  public characters : Character [] = [{
    name : 'Krilin',
    power : 1000
  },{
    name : 'Goku',
    power: 9500
  },{
    name : 'Vegeta',
    power : 7000
  }];

  onNewCharacter (character : Character) :void{
    this.characters.push(character);

  }

}
