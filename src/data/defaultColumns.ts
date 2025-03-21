import type { ColDef, CellClassParams } from "ag-grid-community";

export const defaultColumns: ColDef[] = [
  {
    headerName: "",
    field: "on",
    width: 70,
    flex: 1,
    checkboxSelection: true,
    headerCheckboxSelection: true,
    pinned: "left",
    suppressHeaderMenuButton: true,
    suppressHeaderFilterButton: true,
    resizable: false,
    suppressColumnsToolPanel: true,
    filter: false,
    sortable: false,
  },
  {
    headerName: "Name",
    field: "name",
    filterParams: {
      buttons: ["reset", "apply"],
    },
    editable: false,
    cellStyle: {
      color: "var(--salt-color-gray-900)",
      backgroundColor: "var(--salt-color-teal-20)",
    },
  },
  {
    headerName: "Code",
    field: "code",
  },
  {
    headerName: "Capital",
    field: "capital",
    filter: "agSetColumnFilter",
    cellStyle: (params: CellClassParams) => {
      if (params.value === "Montgomery_4") {
        return {
          color: "var(--salt-color-gray-900)",
          backgroundColor: "var(--salt-color-orange-20)",
        };
      }
    },
  },
  {
    headerName: "Population",
    type: "numericColumn",
    field: "population",
    filter: "agNumberColumnFilter",
    editable: true,
    cellClass: ["numeric-cell", "editable-cell"],
  },
  {
    headerName: "Date",
    field: "date",
    filter: "agDateColumnFilter",
    editable: true,
    cellClass: ["editable-cell"],
  },
];
