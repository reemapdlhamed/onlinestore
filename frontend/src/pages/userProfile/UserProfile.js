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

export default function UserProfile() {
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
      <Button onClick={changePwd} variant="outlined">
        Outlined
      </Button>
    </>
  );
}
