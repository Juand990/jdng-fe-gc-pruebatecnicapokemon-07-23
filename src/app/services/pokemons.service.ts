import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url:string='https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  //id del pokemon del detalle completo
  id: number = 0;

  constructor(private http: HttpClient) { }

  obtener(random:number) {
    return this.http.get(url+'/'+random);
  }

  detalleId(id: any) {
    this.id = id;
    let get = url+'/' + id;
    return this.http.get(get);
  }


}
