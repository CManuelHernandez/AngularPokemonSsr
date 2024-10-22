import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
} from '@angular/core';
import { PokemonCardsComponent } from '../pokemon-cards/pokemon-cards.component';
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonCardsComponent],
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  public pokemons = input.required<SimplePokemon[]>();

  // logEffect = effect(() => {
  //   console.log('PokemonCard: ', this.pokemons());
  // });
}
