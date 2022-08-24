import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {PokemonsList} from "./model/pokemons-list.model";
import {FiltersList} from "./model/filters-list.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemons(pageSize: number, pageIndex: number): Observable<PokemonsList> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("pageIndex", pageIndex)

    return this.httpClient.get<PokemonsList>(environment.apiUrl + '/pokemons', {params: queryParams});
  }

  getFilteredPokemons(filters: FiltersList, pageSize: number, pageIndex: number, ): Observable<PokemonsList> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("pageIndex", pageIndex)

    return this.httpClient.post<PokemonsList>(environment.apiUrl + '/pokemons/search', filters,{params: queryParams});
  }
}
