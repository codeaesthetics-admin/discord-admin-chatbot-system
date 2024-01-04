import React, { useState, useEffect } from "react";
import {
  createCollectionData,
  getCollectionsData,
  updateCollectionData,
  deleteCollectionData,
} from "../Components/APIRequests/CollectionAPIs";
import CollectionTable from "../Components/CollectionTable/CollectionTable";
import Header from "../Components/Header/Header";
import { Box, Button, Typography } from "@mui/material";
import CreateButton from "../Components/buttons/CreateButton";
import Loader from "../Components/Loader/Loader";
import MyModal from "../Components/Modal/Modal";
import Form from "../Components/forms/Form";
const Collection = () => {
  const collectionFields = [
    { label: "Collection Name", name: "collection_name" },
    { label: "TaxOnId", name: "taxonId" },
    { label: "Roles", name: "role" },
    { label: "Weight", name: "weight" },
  ];
  const [collectionState, setCollectionState] = useState([]);
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editeable, setEditeable] = useState(false);
  const [deleteable, setDeleteable] = useState(false);
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const getCollectionId = (id) => {
    setSelectedCollectionId(id);
    console.log("called getCollectionId function");
  };
  const getCollections = async () => {
    setLoading(true);
    const collections = await getCollectionsData();
    setCollectionState(collections);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const handleCreateData = async (_data) => {
    // Handle create data submission logic
    console.log("Form submitted with data:", _data);
    await createCollectionData(_data);
  };
  const handleUpdateData = async (_data) => {
    console.log("Form submitted with data:", _data);
    await updateCollectionData(selectedCollectionId, _data);
  };
  const handleDeleteData = async (selectedCollectionId) => {
    setLoading(true);
    console.log("deleting this id:", selectedCollectionId);
    await deleteCollectionData(selectedCollectionId);
    setLoading(false);
    setDeleteable(false);
    getCollections();
  };
  useEffect(() => {
    getCollections();
  }, []);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: "80vw",
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
            marginLeft: "17.5vw",
          }}
        >
          <Loader />
        </Box>
      ) : (
        <Box
          sx={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            marginLeft: "17.5vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "right",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "left",
              }}
            >
              <Header heading={"Collections"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "right",
                height: 100,
                alignItems: "center",
              }}
            >
              <CreateButton
                // onClick={(e) => {
                //   //setShowModal(true);
                //   createCollection();
                // }}

                modelToggler={(val) => setShowModal(true)}

                // handleClick={(e) => createCollection(e)}
              />
            </Box>
          </Box>
          {/* <Box>{JSON.stringify(editeable)}</Box> */}
          <CollectionTable
            collections={collectionState}
            editState={editeable}
            setEditState={setEditeable}
            deleteState={deleteable}
            setDeleteState={setDeleteable}
            openState={open}
            setOpenState={setOpen}
            onClick={getCollectionId}
          />
          {showModal && (
            <MyModal
              open={showModal}
              setOpen={setShowModal}
              // updateOpen={editeable}
              // setUpdateOpen={setEditeable}
            >
              <Form
                closer={() => setShowModal(false)}
                getCollections={getCollections}
                fields={collectionFields}
                onSubmit={handleCreateData}
                title="Create Collection"
                callFunction={handleCreateData}
              />
            </MyModal>
          )}
          {editeable && (
            <MyModal
              open={editeable}
              setOpen={setEditeable}
              // updateOpen={editeable}
              // setUpdateOpen={setEditeable}
            >
              <Form
                closer={() => setEditeable(false)}
                getCollections={getCollections}
                fields={collectionFields}
                selectedCollectionId={selectedCollectionId}
                onSubmit={handleUpdateData}
                title="Update Collection"
                callFunction={handleUpdateData}
              />
            </MyModal>
          )}
          {deleteable && (
            <MyModal
              open={deleteable}
              setOpen={setDeleteable}
              closer={() => setDeleteable(false)}
              getCollections={getCollections}
              selectedCollectionId={selectedCollectionId}
              title="Update Collection"
              callFunction={handleDeleteData}
              // updateOpen={editeable}
              // setUpdateOpen={setEditeable}
            >
              <Typography sx={{ color: "white" }}>
                Are you sure you want to delete?
                <Button
                  sx={{ color: "white" }}
                  onClick={(e) => handleDeleteData(selectedCollectionId)}
                >
                  Yes
                </Button>
                <Button
                  sx={{ color: "white" }}
                  onClick={(e) => setDeleteable(false)}
                >
                  No
                </Button>
              </Typography>
            </MyModal>
          )}
          {/* {open && <Modal />} */}
          {/* <CustomTable columns={POLL_TABLE_COLUMNS} rows={polls} /> */}
          <Box sx={{}}> </Box>
        </Box>
      )}
    </>
  );
};

export default Collection;
