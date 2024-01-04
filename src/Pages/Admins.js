import React, { useState } from "react";
import CustomTable from "../Components/shared/CustomTable";
import { ADMIN_TABLE_COLUMNS } from "../constants";
import Buttons from "../Components/Buttons";
import AdminTable from "../Components/AdminTable/AdminTable";
import { Box, Container, TableCell, TableRow } from "@mui/material";
import { rows } from "../constants/data";
import MyModal from "../Components/Modal/Modal";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";
import CreateButton from "../Components/buttons/CreateButton";
import Form from "../Components/forms/Form";
import { getAdminData } from "../Components/APIRequests/AdminAPIs";
import { useEffect } from "react";
const Admins = () => {
  const userFields = [
    { label: "Wallet Address", name: "walletAddress" },
    { label: "Discord ID", name: "discordId" },
    { label: "Is Admin", name: "isAdmin" },
  ];

  const [loading, setLoading] = useState(false);
  const [adminState, setAdminState] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const getAdmins = async () => {
    setLoading(true);
    const admins = await getAdminData();
    setAdminState(admins);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log(adminState);
  };
  const handleEditClick = (item) => {};
  const handleDeleteClick = (item) => {};
  const handleCreateData = (formData) => {
    // Handle create data submission logic
    console.log("Form submitted with data:", formData);
  };
  const createUser = () => {
    console.log("calling create ");
    setShowModal(true);
    // handleOpen();
  };
  useEffect(() => {
    getAdmins();
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
              <Header heading={"ADMINS"} />
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
              {/* <CreateButton
                // onClick={(e) => {
                //   //setShowModal(true);
                //   createCollection();
                // }}
                callFunction={createUser}
                // handleClick={(e) => createCollection(e)}
              /> */}
            </Box>
          </Box>

          <AdminTable
            admins={adminState?.users}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
          {/* <CustomTable columns={POLL_TABLE_COLUMNS} rows={polls} /> */}
          {showModal && (
            <MyModal open={showModal} setOpen={setShowModal}>
              <Form
                fields={userFields}
                onSubmit={handleCreateData}
                title="Create User"
              />
            </MyModal>
          )}
          <Box sx={{}}> </Box>
        </Box>
      )}
    </>
  );
};

export default Admins;
