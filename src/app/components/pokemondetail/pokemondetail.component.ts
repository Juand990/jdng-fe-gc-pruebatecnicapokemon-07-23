import { Component } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';


@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css']
})
export class PokemondetailComponent {
  //array que contiene el detalle del Pokemon
  data: any = [];
  id: any = this.pokeService.id; //id que se obtiene del servicio

  constructor(private pokeService: PokemonsService) {}

  //detalle completo al cargar el componente
  ngOnInit() {
    this.pokeService
    .detalleId(this.id)
    .subscribe((result) => (this.data = result));
  }
}
