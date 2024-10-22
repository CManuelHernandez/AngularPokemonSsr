import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonCardsComponent } from '../pokemon-cards/pokemon-cards.component';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonCardsComponent],
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {}
