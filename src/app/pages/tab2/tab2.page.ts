import { Component } from '@angular/core';
import { ListaDeseosService } from 'src/app/services/lista-deseos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public listaDeseosService:ListaDeseosService) {}
}
