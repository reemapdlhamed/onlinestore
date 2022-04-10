// import React from "react";
import * as React from "react";
import axios from "../../api/axios";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "../../components/Home";
import { Route } from "react-router-dom";
import { useState } from "react";
import { border } from "@mui/system";
import "./userProfile.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function UserProfile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [success, setSucces] = useState(false);
  let newPassword;
  let oldPassword;
  const NewPwd = (e) => {
    newPassword = e.target.value;
    console.log(e.target.value);
  };
  const OldPwd = (e) => {
    oldPassword = e.target.value;
    console.log(e.target.value);
  };

  const changePwd = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/changePass",

      data: {
        email: localStorage.getItem("email"),
        password: oldPassword,
        newPassword: newPassword,
        newPasswordConfirm: newPassword,
        role: localStorage.getItem("role"),
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        setSucces(true);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const customId = "custom-id-yes";
  const difToast = () => {
    toast.success("Login Success, Welcome", {
      theme: "dark",
      toastId: customId,
    });
  };

  return (
    <>
      <div class="row">
        <div class="card-container col-md-5">
          <img
            class="round"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="user"
          />
          <h3>{localStorage.getItem("name")}</h3>

          <div class="buttons">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              style={{ marginLeft: "3rem" }}
            >
              <Tab
                label="Setting"
                class="primary "
                style={{ padding: "1rem", color: "white" }}
                {...a11yProps(0)}
              />
              <Tab
                label="Order List"
                style={{ color: "white" }}
                class="primary ghost"
                {...a11yProps(1)}
              />
            </Tabs>

            {/* <button class="primary">Order List </button>
            <button class="primary ghost">Setting</button> */}
          </div>
        </div>

        <div
          class="tab-content col-md-7 pb-5 pt-lg-0  "
          id="v-pills-tabContent"
        >
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <TabPanel value={value} index={0}>
              <form
                className="row  form-container h-100"
                style={{
                  justifyContent: "center",
                  paddingTop: "7rem",
                  paddingLeft: "4rem",
                  gap: "1rem",
                }}
              >
                <TextField
                  value={localStorage.getItem("name")}
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  className="w-50"
                />

                <FormControl variant="standard" className="w-50">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    value={localStorage.getItem("email")}
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <TextField
                  value={oldPassword}
                  onChange={(e) => OldPwd(e)}
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  className="w-50"
                />

                <TextField
                  value={newPassword}
                  onChange={(e) => NewPwd(e)}
                  id="standard-basic"
                  label="New Password"
                  variant="standard"
                  className="w-50"
                />

                <Button
                  onClick={changePwd}
                  style={{ width: "25rem" }}
                  variant="dark"
                >
                  Update Profile
                </Button>
              </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Setting
            </TabPanel>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            {/* <Orders orders={orders} loading={loading} error={error} /> */}
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

{
  /* 
      <TextField
        
        value={localStorage.getItem("name")}
        id="standard-basic"
        label="Name"
        variant="standard"
      />
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={localStorage.getItem("email")}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        value={oldPassword}
        onChange={(e) => OldPwd(e)}
        id="standard-basic"
        label="Password"
        variant="standard"
      />
      <TextField
        value={newPassword}
        onChange={(e) => NewPwd(e)}
        id="standard-basic"
        label="New Password"
        variant="standard"
      />
      <Button onClick={changePwd} variant="dark">
        Update Profile
      </Button> */
}
// </>
//   );
// }
