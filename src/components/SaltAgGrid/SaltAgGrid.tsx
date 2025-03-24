import React, { useState, useEffect, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./SaltAgGrid.scss";
import useFetchData from "../../hooks/useFetchData";
import { useAgGridHelpers } from "../../hooks/useAgGridHelpers";
import { StackLayout, ToggleButton, ToggleButtonGroup } from "@salt-ds/core";
import { clsx } from "clsx";
import { defaultColumns } from "../../data/defaultColumns";
import { rowData } from "../../interfaces/gridInterfaces";

ModuleRegistry.registerModules([AllCommunityModule]);

const SaltAgGrid = () => {
  const { agGridProps, containerProps } = useAgGridHelpers();
  const [selected, setSelected] = useState("primary");
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetchData<rowData[]>("userData", page);

  const onChange = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    setSelected(event.currentTarget.value);
  };

  const onPaginationChanged = useCallback(
    (params: {
      api: {
        paginationGetCurrentPage: () => number;
        paginationGetTotalPages: () => any;
      };
    }) => {
      if (
        params.api.paginationGetCurrentPage() + 1 ===
        params.api.paginationGetTotalPages()
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    []
  );

  if (loading && page === 1) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <StackLayout style={{ width: "100%" }}>
      <ToggleButtonGroup onChange={onChange} value={selected}>
        <ToggleButton value="primary">Primary</ToggleButton>
        <ToggleButton value="secondary">Secondary</ToggleButton>
        <ToggleButton value="zebra">Zebra</ToggleButton>
      </ToggleButtonGroup>
      <div
        {...containerProps}
        className={clsx(containerProps.className, {
          "ag-theme-salt-variant-secondary": selected === "secondary",
          "ag-theme-salt-variant-zebra": selected === "zebra",
        })}
      >
        {data && (
          <AgGridReact
            {...agGridProps}
            columnDefs={defaultColumns}
            rowData={data}
            rowSelection="multiple"
            pagination={true}
            paginationPageSize={100}
            onPaginationChanged={onPaginationChanged}
          />
        )}
      </div>
    </StackLayout>
  );
};

export default SaltAgGrid;
