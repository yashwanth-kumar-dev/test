import React, { useState, type SyntheticEvent, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  GetRowIdParams,
} from "ag-grid-community";
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

  const { data, loading, error } = useFetchData<rowData[]>("userData");

  const onChange = (event: SyntheticEvent<HTMLButtonElement>) => {
    setSelected(event.currentTarget.value);
  };

  if (loading) return <div>Loading...</div>;
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
          />
        )}
      </div>
    </StackLayout>
  );
};

export default SaltAgGrid;
