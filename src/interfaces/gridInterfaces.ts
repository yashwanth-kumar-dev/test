export interface ColumnDef {
    field: string;
    sortable: boolean;
    filter: boolean;
    resizable: boolean;
    flex: number;
    pinned?: boolean | "left" | "right" | null | undefined;
  }

  export interface rowData {
    make: string;
    model: string;
    price: number;
    electric: boolean;
  }
  
  export interface GridData {
    columnDefs: any[];
    rowData: rowData[];
  }

  export interface IOlympicData {
    athlete: string,
    age: number,
    country: string,
    year: number,
    date: string,
    sport: string,
    gold: number,
    silver: number,
    bronze: number,
    total: number
}