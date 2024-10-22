import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemon-cards',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardsComponent {}
