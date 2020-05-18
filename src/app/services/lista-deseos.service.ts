import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class ListaDeseosService {

  listas:Lista[] = []

  constructor() {
    this.cargarInfo()
  }

  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo)
    this.listas.push(nuevaLista)
    this.guardarInfo();

    return nuevaLista.id
  }

  obtenerLista(id:string | number){
    id = Number(id)

    return this.listas.find( listaData => listaData.id === id)
  }

  borrarLista(lista:Lista){
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id)
    this.guardarInfo()
  }


  //Metodos para almacenar en localStorage
  guardarInfo(){
    localStorage.setItem('data',JSON.stringify(this.listas))
  }

  cargarInfo(){
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'))
    }else{
      this.listas = []
    }

  }
}
