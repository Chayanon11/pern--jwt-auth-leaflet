import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import ActionButton from "./ActionButton";

const AirportTable = ({ updateMap }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [rows, setRows] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    axios
      .get(`https://pern-passport-auth-leaflet-r13o.vercel.app/points`)
      .then((response) => {
        setRows(response.data);
      });
  }, []);

  const columns = [
    { id: "id", label: "ID", minWidth: 50 },
    { id: "lm_name", label: "Location Name", minWidth: 150 },
    {
      id: "lat",
      label: "Latitude",
      minWidth: 100,
      align: "right",
    },
    {
      id: "lon",
      label: "Longitude",
      minWidth: 100,
      align: "right",
    },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
      align: "right",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value.toLowerCase());
    setPage(0);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(searchKeyword)
    )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-shrink-0 p-4 dark:bg-gray-900 shadow-sm flex flex-row items-center justify-between">
        <h1 className="text-white flex-grow-0 text-2xl font-extrabold">
          SEARCH
        </h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-32 sm:w-40 md:w-48 flex-shrink-0"
        />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Paper className="w-full">
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "action" ? (
                                <ActionButton
                                  lat={row.lat}
                                  lon={row.lon}
                                  zoom={row.action}
                                  onClick={() => {
                                    updateMap(
                                      row.lat,
                                      row.lon,
                                      row.action,
                                      "flyTo"
                                    );
                                  }}
                                />
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            sx={{
              backgroundColor: "rgba(26, 32, 44, 1)",
              color: "white",
              "& .MuiTablePagination-selectLabel": {
                color: "white",
              },
              "& .MuiTablePagination-input": {
                color: "white",
              },
              "& .MuiTablePagination-spacer": {
                color: "white",
              },
              "& .MuiTablePagination-displayedRows": {
                color: "white",
              },
              "& .MuiTablePagination-actions": {
                color: "white",
              },
            }}
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default AirportTable;
