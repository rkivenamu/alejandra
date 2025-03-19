import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina04',
  templateUrl: './pagina04.page.html',
  styleUrls: ['./pagina04.page.scss'],
  standalone: false,
})
export class Pagina04Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  num:number = 0;
  resultado:any = [];

  calcularTabla() {
    this.resultado=[];
    for (let i=0;i<10; i++)
    {
      this.resultado[i]=this.num*(i+1);
    }
  }
}
