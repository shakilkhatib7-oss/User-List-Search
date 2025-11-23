import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import CommonDataTableHeader from "../components/DataTable";
import { useQuery } from "@tanstack/react-query";
import { usersList } from "../api/users";

const UsersList = () => {
  const [lazyState, setLazyState] = useState({ search: { value: "" } });
  const [dateRange, setDateRange] = useState(null);
  const [filter, setFilter] = useState(null);
  
  const {data, isLoading} = useQuery({
    queryKey: ["users"],
    queryFn: usersList,
    enabled: true,

  })

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <h1 className="text-2xl font-bold">UsersList</h1>
      </div>

      <CommonDataTableHeader
        title="Users"
        lazyState={lazyState}
        setLazyState={setLazyState}
        // dateRange={dateRange}
        // setDateRange={setDateRange}
        // filter={filter}
        // setFilter={setFilter}
        // dropDownOptions={[{ label: "Option 1", value: 1 }]}
        // dropDownLabel="Select Option"
      />

      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="username" header="Username"></Column>
        <Column field="email" header="Email"></Column>
      </DataTable>
    </div>
  );
};

export default UsersList;
