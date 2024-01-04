import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const CollectionTable = ({
  collections,
  editState,
  setEditState,
  deleteState,
  setDeleteState,
  openState,
  setOpenState,
  onClick,
}) => {
  const cellStyle = {
    textAlign: "center",
    color: "#EFE1D1",
    fontWeight: "bold",
    padding: "2px 2px",
    height: "20px",
  };
  const handleEditClick = (collection) => {
    setEditState(true);
    //setOpenState(true);
    onClick(collection.id);
    console.log(editState);
  };
  const handleDeleteClick = (collection) => {
    setDeleteState(true);
    //setOpenState(true);
    onClick(collection.id);
    console.log(deleteState);
  };
  // const getCollections = async () => {
  //   setLoading(true);
  //   const collections = await getCollectionsData();
  //   setCollectionState(collections);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // };
  return (
    <>
      <TableContainer
        sx={{
          background: "#3e3e3e",
          border: "1px solid #ccc",
          borderRadius: "10px",
          maxHeight: "80vh",
          "&::-webkit-scrollbar": {
            width: "0.4em", // Make the scrollbar width very small
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent", // Set the thumb color to transparent
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={cellStyle}>Collection name</TableCell>
              <TableCell sx={cellStyle}>Tax on ID</TableCell>
              {/* <TableCell sx={cellStyle}>Roles</TableCell> */}
              <TableCell sx={cellStyle}>Weight</TableCell>
              <TableCell sx={cellStyle}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={
              {
                // maxHeight: "75vh", // Specify your desired height
                // overflowY: "auto", // Enable vertical scrollbar
                // "&::-webkit-scrollbar": {
                //   width: "6px",
                // },
                // "&::-webkit-scrollbar-thumb": {
                //   //backgroundColor: 'green',
                //   borderRadius: "5px",
                // },
              }
            }
          >
            {collections?.map((collection, index) => (
              <TableRow
                key={index}
                sx={{
                  background: "transparent",
                  "&:hover": {
                    background: "#2c2c2c",
                  },
                }}
              >
                <TableCell sx={cellStyle}>
                  {collection.collection_name}
                </TableCell>
                <TableCell sx={cellStyle}>{collection.taxonid}</TableCell>
                {/* <TableCell sx={cellStyle}>{collection.role}</TableCell> */}
                <TableCell sx={cellStyle}>{collection.weight}</TableCell>
                <TableCell sx={cellStyle}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      border: "none",
                      color: "#EFE1D1",
                      "&:hover": {
                        border: "none",
                        color: "#3e3e3e",
                        background: "#EFE1D1",
                      },
                    }}
                    onClick={(e) => handleEditClick(collection)}
                    //onClick={(val) => setShowModal(true)}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                      border: "none",
                      color: "#EFE1D1",
                      "&:hover": {
                        border: "none",
                        color: "#3e3e3e",
                        background: "#EFE1D1",
                      },
                    }}
                    onClick={() => handleDeleteClick(collection)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CollectionTable;
