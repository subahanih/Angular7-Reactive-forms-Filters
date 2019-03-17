import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
declare var $: any;

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen',     weight: 1.0079,   symbol: 'H'  },
  { position: 2, name: 'Helium',       weight: 4.0026,   symbol: 'He' },
  { position: 3, name: 'Lithium',      weight: 6.941,    symbol: 'Li' },
  { position: 4, name: 'Beryllium',    weight: 9.0122,   symbol: 'Be' },
  { position: 5, name: 'Boron',        weight: 10.811,   symbol: 'B'  },
  { position: 6, name: 'Carbon',       weight: 12.0107,  symbol: 'C'  },
  { position: 7, name: 'Nitrogen',     weight: 14.0067,  symbol: 'N'  },
  { position: 8, name: 'Oxygen',       weight: 15.9994,  symbol: 'O'  },
  { position: 9, name: 'Fluorine',     weight: 18.9984,  symbol: 'F'  },
  { position: 10, name: 'Neon',        weight: 20.1797,  symbol: 'Ne' },
  { position: 11, name: 'Sodium',      weight: 22.9897,  symbol: 'Na' },
  { position: 12, name: 'Magnesium',   weight: 24.305,   symbol: 'Mg' },
  { position: 13, name: 'Aluminum',    weight: 26.9815,  symbol: 'Al' },
  { position: 14, name: 'Silicon',     weight: 28.0855,  symbol: 'Si' },
  { position: 15, name: 'Phosphorus',  weight: 30.9738,  symbol: 'P'  },
  { position: 16, name: 'Sulfur',      weight: 32.065,   symbol: 'S'  },
  { position: 17, name: 'Chlorine',    weight: 35.453,   symbol: 'Cl' },
  { position: 18, name: 'Argon',       weight: 39.948,   symbol: 'Ar' },
  { position: 19, name: 'Potassium',   weight: 39.0983,  symbol: 'K'  },
  { position: 20, name: 'Calcium',     weight: 40.078,   symbol: 'Ca' },
  { position: 21, name: 'Hydrogen',    weight: 1.0079,   symbol: 'H'  },
  { position: 22, name: 'Helium',      weight: 4.0026,   symbol: 'He' },
  { position: 23, name: 'Lithium',     weight: 6.941,    symbol: 'Li' },
  { position: 24, name: 'Beryllium',   weight: 9.0122,   symbol: 'Be' },
  { position: 25, name: 'Boron',       weight: 10.811,   symbol: 'B'  },
  { position: 26, name: 'Carbon',      weight: 12.0107,  symbol: 'C'  },
  { position: 27, name: 'Nitrogen',    weight: 14.0067,  symbol: 'N'  },
  { position: 28, name: 'Oxygen',      weight: 15.9994,  symbol: 'O'  },
  { position: 29, name: 'Fluorine',    weight: 18.9984,  symbol: 'F'  },
  { position: 30, name: 'Neon',        weight: 20.1797,  symbol: 'Ne' },
  { position: 31, name: 'Sodium',      weight: 22.9897,  symbol: 'Na' },
  { position: 32, name: 'Magnesium',   weight: 24.305,   symbol: 'Mg' },
  { position: 33, name: 'Aluminum',    weight: 26.9815,  symbol: 'Al' },
  { position: 34, name: 'Silicon',     weight: 28.0855,  symbol: 'Si' },
  { position: 35, name: 'Phosphorus',  weight: 30.9738,  symbol: 'P'  },
  { position: 36, name: 'Sulfur',      weight: 32.065,   symbol: 'S'  },
  { position: 37, name: 'Chlorine',    weight: 35.453,   symbol: 'Cl' },
  { position: 38, name: 'Argon',       weight: 39.948,   symbol: 'Ar' },
  { position: 39, name: 'Potassium',   weight: 39.0983,  symbol: 'K'  },
  { position: 40, name: 'Calcium',     weight: 40.078,   symbol: 'Ca' },
];

@Component({
  selector: 'app-basetemplate',
  templateUrl: './basetemplate.component.html',
  styleUrls: ['./basetemplate.component.css']
})
export class BaseTemplateComponent implements OnInit {
  private paginator: MatPaginator;
  private sort: MatSort;
  editMode: boolean;
  public columns = [
    { columnDef: 'position',  header: 'No.',    cell: (element: PeriodicElement) => `${element.position}` },
    { columnDef: 'name',      header: 'Name',   cell: (element: PeriodicElement) => `${element.name}`     },
    { columnDef: 'weight',    header: 'Weight', cell: (element: PeriodicElement) => `${element.weight}`   },
    { columnDef: 'symbol',    header: 'Symbol', cell: (element: PeriodicElement) => `${element.symbol}`   },
  ];
  // displayedColumns = this.columns.map(c => c.columnDef);
  public displayedColumns: string[] = this.loadColumns();
  private tableFilters = [];
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() {}

  ngOnInit() {}

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  private setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string): boolean => {
      const matchFilter = [];
      const filters = JSON.parse(filter);
        filters.forEach(element => {
            const val = data[element.fltrColumn] === null ? '' : data[element.fltrColumn];
            matchFilter.push(val.toString().trim().toLowerCase().includes(element.fltrValue.toLowerCase()));
        });
        return matchFilter.every(Boolean);
    };
  }

  private loadColumns() {
    if (true) {
      this.displayedColumns = ['select'];
      return this.displayedColumns.concat(this.columns.map(c => c.columnDef));
    } else {
      return this.displayedColumns = this.columns.map(c => c.columnDef);
    }
  }

  private applyFilters(column: string, value: string) {
    console.log('ColumnName: ' + column + ' : ' + 'Value: ' + value);
    console.log('Before: ' + ' : ' + JSON.stringify(this.tableFilters));
    console.log('index: ' + this.tableFilters.findIndex(filter => filter.fltrColumn === column));
    if (column != null) {
      const ind = this.tableFilters.findIndex(filter => filter.fltrColumn === column);
      if (ind !== -1) {
        this.tableFilters.splice(ind, 1);
      }
      this.tableFilters.push({
        fltrColumn: column,
        fltrValue: value
      });
    }
    console.log('After: ' + ' : ' + JSON.stringify(this.tableFilters));
    this.dataSource.filter = JSON.stringify(this.tableFilters);
  }

  private refresh(editMode: boolean) {
    this.editMode = editMode;
    this.tableFilters = [];
    this.applyFilters(null, '');
  }

  public reset(): void {}

  public downloadOptions(): void {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
