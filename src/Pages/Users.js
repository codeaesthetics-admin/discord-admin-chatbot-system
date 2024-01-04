import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import {
  createUserData,
  getUserData,
  updateUserData,
  deleteUserData,
  searchUserData,
} from "../Components/APIRequests/UserApis";
import UsersTable from "../Components/UserTable/UserTable";
import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  MenuItem,
} from "@mui/material";
import CreateButton from "../Components/buttons/CreateButton";
import Loader from "../Components/Loader/Loader";
import MyModal from "../Components/Modal/Modal";
import Form from "../Components/forms/Form";
import Header from "../Components/Header/Header";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Users = () => {
  const UserFields = [
    // { label: "Wallet Address", name: "wallet" },
    //{ label: "Discord ID", name: "discord_id" },
    { label: "Role", name: "roles" },
    // { label: "User Role", name: "user_role" },
    //{ label: "Updated By", name: "updated_by" },
  ];
  const initialFormData = {
    //wallet: "",
    // discord_id: "",
    roles: "",
    //user_role: "",
    // updated_by: "",
  };
  const inputStyle = {
    marginBottom: "15px",
  };
  const [userState, setUserState] = useState([]);
  const [searchedUser, setSearchedUser] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editeable, setEditeable] = useState(false);
  const [deleteable, setDeleteable] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [search, setSearch] = useState(null);
  const [role, setRole] = useState("user");
  const [isChecked, setIsChecked] = useState(false);

  const handleCreateData = async (_data) => {
    // Handle create data submission logic
    console.log("Form submitted with data:", _data);
    await createUserData(_data);
  };
  const getUsers = async () => {
    setLoading(true);
    const users = await getUserData();
    setUserState(users);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const getUserId = (id) => {
    setSelectedUserId(id);
    console.log("called getUserId function");
  };
  const handleUpdateData = async (_data) => {
    console.log("Form submitted with data:", _data);
    await updateUserData(selectedUserId, _data);
  };
  const handleDeleteData = async (selectedUserId) => {
    setLoading(true);

    console.log("deleting this id:", selectedUserId);
    await deleteUserData(selectedUserId);
    setLoading(false);
    setDeleteable(false);
    getUsers();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle form submission here, e.g., sending data to a server
    await createUserData(formData);
    setShowModal(false);
    getUsers();
    console.log("Form submitted with data:", formData);
  };

  const handleSearchSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(search);
    const searchedData = await searchUserData(search);
    console.log(searchedData);
    setUserState([searchedData]);

    //setUserState(searchedData);
    setLoading(false);
  };
  // const handleSwitchChange = async (event) => {
  //   setIsChecked(event.target.checked);
  //   if (isChecked) {
  //     setRole("admin");
  //     console.log(role);
  //   } else {
  //     setRole("user");
  //     console.log(role);
  //   }
  //   //updateUserData()
  //   console.log("Role changed to: ", role);
  // };
  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    console.log("The date am sending to API is: ", formData);
    setFormData({ roles: role });
    await updateUserData(selectedUserId, { roles: role });
    setEditeable(false);
    getUsers();
    console.log("Form submitted with data:", formData);
  };
  const handleRoleChange = (event) => {
    const newRole = event.target.value;
    setRole(newRole);
    //setRole(event.target.value);
    console.log(newRole, "will be updated role");
  };
  useEffect(() => {
    getUsers();
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
              <Header heading={"Users"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "right",
                height: 10,
                marginTop: 3,
                alignItems: "center",
              }}
            >
              {/* <CreateButton modelToggler={(val) => setShowModal(true)} /> */}
              <Grid
                container
                sx={{
                  // width: "400px",
                  marginTop: 2,
                }}
              >
                <Grid xs={4}></Grid>
                <Grid xs={8}>
                  <form style={{}} onSubmit={handleSearchSubmit}>
                    <Box sx={{ display: "flex", direction: "row" }}>
                      <Box>
                        <TextField
                          className="font"
                          id="filled-basic"
                          label="Search..."
                          variant="filled"
                          fullWidth
                          size="small"
                          //value={searchState}
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                          InputLabelProps={{
                            style: {
                              color: "#EFE1D1",
                            },
                          }}
                          SelectProps={{
                            style: {
                              color: "#EFE1D1",
                            },
                          }}
                          sx={{
                            color: "#EFE1D1",
                            background: "#2c2c2c",
                            borderRadius: "2px",
                            "& .MuiOutlinedInput-root": {
                              // borderColor: "#EFE1D1",
                              "&.Mui-focused fieldset": {
                                // border: "none",
                                borderColor: "#EFE1D1",
                              },
                            },
                          }}
                        />
                      </Box>
                      <Box sx={{ ml: 1, mt: 1 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          <SearchIcon />
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <UsersTable
            users={userState}
            editState={editeable}
            setEditState={setEditeable}
            deleteState={deleteable}
            setDeleteState={setDeleteable}
            openState={open}
            setOpenState={setOpen}
            onClick={getUserId}
          />
          {/* <UsersTable users={searchedUser} /> */}
          {showModal && (
            <MyModal
              open={showModal}
              setOpen={setShowModal}
              // updateOpen={editeable}
              // setUpdateOpen={setEditeable}
            >
              {/* <Form
                closer={() => setShowModal(false)}
                getUsers={getUsers}
                fields={UserFields}
                onSubmit={handleCreateData}
                title="Create Users"
                callFunction={handleCreateData}
              /> */}
              <form onSubmit={handleSubmit}>
                {UserFields.map((field) => (
                  <TextField
                    key={field.name}
                    style={inputStyle}
                    label={field.label}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                    InputProps={{ disableUnderline: true }}
                  />
                ))}
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </MyModal>
          )}
          {editeable && (
            <MyModal
              open={editeable}
              setOpen={setEditeable}
              // updateOpen={editeable}
              // setUpdateOpen={setEditeable}
            >
              <form onSubmit={handleUpdateSubmit}>
                {UserFields.map((field) => (
                  // <TextField
                  //   key={field.name}
                  //   style={inputStyle}
                  //   label={field.label}
                  //   name={field.name}
                  //   value={formData[field.name]}
                  //   onChange={handleInputChange}
                  //   variant="outlined"
                  //   required
                  //   InputProps={{ disableUnderline: true }}
                  // />
                  <Grid
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid
                      xs={12}
                      sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      Create this user an Admin?
                    </Grid>
                    <Grid
                      xs={12}
                      sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      {/* <Switch
                        checked={isChecked}
                        onChange={handleSwitchChange}
                      /> */}

                      <TextField
                        select
                        value={role}
                        label="Color"
                        fullWidth
                        onChange={handleRoleChange}
                        variant="filled"
                        InputLabelProps={{
                          style: {
                            color: "#EFE1D1",
                          },
                        }}
                        SelectProps={{
                          style: {
                            color: "#EFE1D1",
                          },
                        }}
                        sx={{
                          color: "#EFE1D1",
                          background: "#2c2c2c",
                          borderRadius: "2px",
                          "& .MuiOutlinedInput-root": {
                            // borderColor: "#EFE1D1",
                            "&.Mui-focused fieldset": {
                              // border: "none",
                              borderColor: "#EFE1D1",
                            },
                          },
                        }}
                      >
                        <MenuItem value={"user"}>User</MenuItem>
                        <MenuItem value={"admin"}>Admin</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid
                      xs={12}
                      sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <Button variant="contained" color="primary" type="submit">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                ))}
              </form>
            </MyModal>
          )}
          {deleteable && (
            <MyModal
              open={deleteable}
              setOpen={setDeleteable}
              closer={() => setDeleteable(false)}
              getUsers={getUsers}
              // selectedCollectionId={selectedCollectionId}
              title="Update Collection"
              // callFunction={handleDeleteData}
              // updateOpen={editeable}
              // setUpdateOpen={setEditeable}
            >
              <Typography sx={{ color: "white" }}>
                Are you sure you want to delete?
                <Button
                  sx={{ color: "white" }}
                  onClick={(e) => handleDeleteData(selectedUserId)}
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

export default Users;
