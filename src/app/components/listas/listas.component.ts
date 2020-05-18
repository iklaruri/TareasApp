import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ListaDeseosService } from 'src/app/services/lista-deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada=true
  @ViewChild('lista') lista:IonList

  constructor(public listaDeseosService:ListaDeseosService,
              private router:Router,
              private alertController:AlertController
            ) { }

  ngOnInit() {}

  listaSeleccionada(lista:Lista){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`)
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`)
    }
  }

  borrarLista(lista:Lista){
    this.listaDeseosService.borrarLista(lista)
  }

  async editarLista(lista:Lista){
    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs:[
        {
          name:'titulo',
          type: 'text',
          placeholder:lista.titulo
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
          text:'Editar',
          handler: (data) =>{
            if(data.titulo.length === 0){
              return
            }else{
              lista.titulo = data.titulo
              this.listaDeseosService.guardarInfo();
              //Cierra icono Editar
              this.lista.closeSlidingItems()
            }
          }
        }
      ]
    });

    alert.present();

  }

}
