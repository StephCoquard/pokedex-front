import {Pokemon} from "./pokemon.model";

export interface PokemonsList {
  totalCount: number;
  filteredCount: number;
  results: Pokemon[];
}
