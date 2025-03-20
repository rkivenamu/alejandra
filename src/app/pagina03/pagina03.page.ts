import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina03',
  templateUrl: './pagina03.page.html',
  styleUrls: ['./pagina03.page.scss'],
  standalone: false,
})
export class Pagina03Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  n1:number = 0;
  n2:number = 0;
  resultado:number = 0;

  sumar() {
    this.resultado = this.n1 + this.n2;
  }
}
