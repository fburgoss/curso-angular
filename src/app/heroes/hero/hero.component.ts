import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public showHeroButton: boolean = true;
  public showAgeButton: boolean = true;


  changeHero():void {
    this.name = 'Spiderman';
    this.showHeroButton = false;
}


changeAge():void {
  this.age = 20;
  this.showAgeButton = false;
}

ResetForm() :void {
  this.name = 'ironman'
  this.age = 45;
  this.showHeroButton = true;
  this.showAgeButton = true;

}


}
