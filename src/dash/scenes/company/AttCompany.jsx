import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import UserGrid from "../../components/grid/UserGrid";
import { Link } from "react-router-dom";

function AttCompany() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      // align: "center",
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone_number",
      headerName: "Phone_number",
      flex: 1,
    },
    {
      field: "rate",
      headerName: "Rate",
      flex: 0.5,
    },
    {
      field: "More",
      headerName: "More",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { id } }) => {
        return (
          <Box
            m="0 auto"
            display="flex"
            justifyContent="center"
            style={{ cursor: "pointer" }}
            p="0 10px"
            color="black"
            borderRadius="4px"
            backgroundColor="#9e9e9e"
            sx={{
              "& a ": {
                color: "black",
              },
            }}
          >
            <Link to={"/dash/showAttraction"} state={{ id: id }}>
              Show More
            </Link>
          </Box>
        );
      },
    },
  ];
  return (
    <Box
      m="10px 0 40px 0"
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-row": {
          borderBottom: "none !important",
        },
        position: "absolute",
        top: "20%",
        padding: "20px 50px",
        width: "100%",
      }}
    >
      <UserGrid
        url="http://127.0.0.1:8000/api/admin/getAllAttractions"
        columns={columns}
      />
    </Box>
  );
}

export default AttCompany;
