import { Component } from '@angular/core';
import { ListaDeseosService } from 'src/app/services/lista-deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public listaDeseosService:ListaDeseosService,
               private alertController:AlertController,
               private router:Router) {


  }

  async agregarLista(){



    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs:[
        {
          name:'titulo',
          type: 'text',
          placeholder:'Nombre de la lista'
        }
      ],
      buttons: [
        {
        text:'Cancelar',
        role:'cancel',
        handler: () =>{
          console.log('Cancelar')
        }
      },
        {
          text:'Crear',
          handler: (data) =>{
            if(data.titulo.length === 0){
              return
            }
            const listaId = this.listaDeseosService.crearLista(data.titulo)

            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`)
          }
        }
      ]
    });

    alert.present();


  }



}
