import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina05',
  templateUrl: './pagina05.page.html',
  styleUrls: ['./pagina05.page.scss'],
  standalone: false,
})
export class Pagina05Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numero: number = 0;
  resultado: number | null = null;

  calcularFactorial() {
    this.resultado = this.factorial(this.numero);
  }
  
  factorial(n: number): number {
    if (n < 0) return -1; // Factorial no definido para números negativos
    if (n === 0) return 1; // 0! es 1
    return n * this.factorial(n - 1);
  }
}
