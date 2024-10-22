import { CommonModule } from '@angular/common';
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces';

@Component({
  selector: 'pokemons-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  private pokemonsService = inject(PokemonsService);

  public pokemons = signal<SimplePokemon[]>([]);
  //public isLoading = signal(true);

  //private appRef = inject(ApplicationRef);

  //private $appState = this.appRef.isStable.subscribe((isStable) => {
  //  console.log({ isStable });
  //});

  ngOnInit(): void {
    this.loadPokemons();
    //  setTimeout(() => {
    //    this.isLoading.set(false);
    //  }, 5000);
  }

  public loadPokemons(page = 0) {
    this.pokemonsService.loadPage(page).subscribe((pokemons) => {
      this.pokemons.set(pokemons);
    });
  }

  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe();
  // }
}
