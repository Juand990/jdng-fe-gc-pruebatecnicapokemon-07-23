import { Component } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css'],
})
export class PokemonlistComponent {
  //lista de 8 Pokemons randoms
  pokemons: any = [];
  //Filtro de Pokemons
  filtro: any = '';
  pokeFiltro: any = [];
  constructor(private pokeService: PokemonsService) {}
  //personaje detalle que se envia al detalle.component
  pokeDetalle: any = [];

  //cargar 8 Pokemons randoms en el componente al abrir
  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      let rd = Math.floor(Math.random() * 1010 + 1);
      this.pokeService
        .obtener(rd)
        .subscribe((result) => this.pokemons.push(result));
    }
  }

  detalle(pokeid: any) {
    this.pokeService
      .detalleId(pokeid)
      .subscribe((result) => (this.pokeDetalle = result));
  }
  //Filtrar Pokemons por nombre
  filtrar(filtro: any) {
    this.pokeFiltro=[];
    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].name == filtro) {
        this.pokeFiltro.push(this.pokemons[i]);
      }         
    }   
  }
}
