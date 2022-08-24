import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Pokemon} from "./model/pokemon.model";
import {PokemonService} from "./pokemon.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {map} from "rxjs";
import {FiltersList} from "./model/filters-list.model";

@Component({
  selector: 'pokedex-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'size', 'weight'];
  pokemons: Pokemon[] = []

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  length = 0;

  filtersList: FiltersList = {filters: []};

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.applyFilters(this.filtersList);
  }

  ngAfterViewInit(): void {
    this.paginator?.page
      .subscribe(o => {
        this.loadPokemons(this.filtersList, o.pageSize, o.pageIndex)
      })
  }

  public applyFilters(filterList: FiltersList) {
    this.filtersList = filterList;
    this.loadPokemons(filterList, 20, 0);
  }

  private loadPokemons(filtersList: FiltersList, pageSize: number, pageIndex: number) {
    this.pokemonService.getFilteredPokemons(filtersList, pageSize, pageIndex).subscribe(result => {
      console.log(result)
      this.pokemons = result.results;
      this.length = result.filteredCount;
    });
  }
}
