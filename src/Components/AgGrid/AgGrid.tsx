import React, { useState } from "react";

import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

// Create new GridExample component
const AgGrid = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: false },
    { make: "Ford", model: "F-Series", price: 33850, electric: true },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "make", pinned: "left" },
    { field: "model", sortable: true }, // to make a specific column sortable
    { field: "price" },
    { field: "electric" },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
    sortable: false, //to make all columns sortable
    filter: true,
    resizable: true,
  };

  const gridOptions = {
    pinnedTopRowData: [
      { make: "Pinned Top", model: "Row", price: 0, electric: false },
    ],
    pinnedBottomRowData: [{ make: "Pinned Bottom", model: "Row", price: 0 }],
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div style={{ width: "100%", height: "250px" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        gridOptions={gridOptions}
      />
    </div>
  );
};

export default AgGrid;
