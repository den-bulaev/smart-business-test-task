import { useMemo } from "react";

import type { ColumnDef } from "@tanstack/react-table";

import TableComponent from "../../components/tableComponent/TableComponent";
import LoaderComponent from "../../components/loaderComponent/LoaderComponent";

import { useGetCryptoQuery } from "./cryptoApiSlice";
import type { IPairData } from "./interfaces";

const Users: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useGetCryptoQuery(encodeURIComponent('["BTCUSDT","BNBUSDT","ETHUSDT","SOLUSDT","USDCUSDT","XRPUSDT","DOGEUSDT","TONUSDT","TRXUSDT","ADAUSDT","AVAXUSDT","BTCUSDC"]'));

  const columns = useMemo<ColumnDef<IPairData, any>[]>(
    () => [
      {
        accessorKey: "symbol",
        cell: info => info.getValue(),
        header: () => <span>Pair Name</span>,
        enableColumnFilter: false,
      },
      {
        accessorFn: row => row.lastPrice,
        id: "lastPrice",
        cell: info => info.getValue(),
        header: () => <span>Last Price</span>,
        enableColumnFilter: false,
      },
      {
        accessorKey: "highPrice",
        cell: info => info.getValue(),
        header: () => <span>High Price</span>,
        enableColumnFilter: false,
      },
      {
        accessorKey: "lowPrice",
        cell: info => info.getValue(),
        header: () => <span>Low Price</span>,
        enableColumnFilter: false,
      },
    ],
    [],
  );

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (isSuccess || isError) {
    return (
      <>
        <h1 className="m-auto text-[calc(8px+2vmin)]">Crypto statistics for 24hrs</h1>
        <TableComponent data={data ?? []} columns={columns} />
      </>
    );
  }
};

export default Users;
