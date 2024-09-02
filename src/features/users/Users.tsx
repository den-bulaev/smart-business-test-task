import { useMemo } from "react";

import type { ColumnDef } from "@tanstack/react-table";

import TableComponent from "../../components/tableComponent/TableComponent";
import LoaderComponent from "../../components/loaderComponent/LoaderComponent";

import { useGetUsersQuery } from "./usersApiSlice";
import type { IUser } from "./interfaces";

const Users: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useGetUsersQuery("");

  const columns = useMemo<ColumnDef<IUser, any>[]>(
    () => [
      {
        accessorKey: "name",
        cell: info => info.getValue(),
        header: () => <span>Name</span>,
      },
      {
        accessorFn: row => row.username,
        id: "username",
        cell: info => info.getValue(),
        header: () => <span>User Name</span>,
      },
      {
        accessorKey: "email",
        cell: info => info.getValue(),
        header: () => <span>Email</span>,
      },
      {
        accessorKey: "phone",
        cell: info => info.getValue(),
        header: () => <span>Phone</span>,
      },
    ],
    [],
  );

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (isSuccess || isError) {
    return <TableComponent data={data ?? []} columns={columns} />;
  }
};

export default Users;
