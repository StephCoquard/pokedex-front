import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  FiltersList,
  IntegerFilter,
  OperationType,
  OperationTypeMapping,
  StringFilter
} from "../model/filters-list.model";

@Component({
  selector: 'pokedex-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss']
})
export class FiltersPanelComponent implements OnInit {

  @Output() filtersList = new EventEmitter<FiltersList>();

  nameFilter = '';
  sizeFilter?: number;
  selectedSizeOperation = OperationType.EQUALS;
  weightFilter?: number;
  selectedWeightOperation = OperationType.EQUALS;

  public OperationTypeMapping = OperationTypeMapping;

  operations = Object.values(OperationType);

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    let filters = [];

    console.log(this.nameFilter);

    if (this.nameFilter) {
      filters.push({
        type: 'STRING',
        propertyName: 'name',
        value: this.nameFilter
      } as StringFilter)
    }

    if (this.sizeFilter) {
      filters.push({
        type: 'INTEGER',
        propertyName: 'size',
        operationType: this.selectedSizeOperation,
        value: this.sizeFilter
      } as IntegerFilter)
    }

    if (this.weightFilter) {
      filters.push({
        type: 'INTEGER',
        propertyName: 'weight',
        operationType: this.selectedWeightOperation,
        value: this.weightFilter
      })
    }

    let obj = {
      filters: filters
    };

    console.log(obj);

    this.filtersList.emit(obj);
  }
}
