import { Component, OnInit, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { AlertController } from '@ionic/angular';

type Fruit = Array<{ id: number; name: string }>;

@Component({
  selector: 'app-pagina06',
  templateUrl: './pagina06.page.html',
  styleUrls: ['./pagina06.page.scss'],
  standalone: false,
})
export class Pagina06Page implements OnInit {

nombre:string='Juan Pérez';

fruits: Fruit = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Guava" },
  { id: 4, name: "Strawberry" }
];

//------------Array Persona------------------------
personas: Persona[] = [
  {nombre: "Iron Man",edad:40,escolaridad:'Licenciatura'},
  {nombre: "X",edad:50,escolaridad:'Licenciatura'},
  {nombre: "Juan Pérez",edad:10,escolaridad:'Primaria'},
  {nombre: "Alfredo",edad:16,escolaridad:'Preparatoria'},
  {nombre: "Lyan",edad:60,escolaridad:'Doctorado'},
];

constructor(private alertController: AlertController) {
//this.presentAlert();
}
       async presentAlert() {
        const alert = await this.alertController.create({
          header: 'Ejemplo de Alert',
          subHeader: 'Important message',
          message: 'Este es un msg de alerta',
          buttons: ['OK'],
        });
    
        await alert.present();
      }
   
  ngOnInit() {
    console.log(this.fruits);
  }

}
class Persona {
  constructor(public nombre: string, public edad: number,
    public escolaridad:string) { }
}