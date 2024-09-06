import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // <-- Cierra correctamente el array
})
export class AppComponent {
  public title: string = 'Heroes';
  public counter: number = 10;

  
  incrementarODisminuirNumero(operacion: string): void {
    if (operacion === 'incrementar') {
      this.counter += 1;
    } else if (operacion === 'disminuir') {
      this.counter -= 1;
    }
  }

  resetNumero(){
    this.counter = 0;
  }
  
}

