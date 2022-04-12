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
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { border } from "@mui/system";
import "./userProfile.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";

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
function createData(ID, Name, Status, Total) {
  return { ID, Name, Status, Total };
}
export default function UserProfile() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const orderState = useSelector((state) => state.handleOrders);

  var rows = [];

  for (let i = 0; i < orderState.length; i++) {
    if (orderState[i]._id&&orderState[i].customerName&&orderState[i].paymentStatus&&orderState[i].totalPrice) {


      rows.push({
        id: orderState[i]._id,
        customerName: orderState[i].customerName,
        orderStatus: orderState[i].orderStatus,
        totalPrice: orderState[i].totalPrice,
      });

   
    }
  }

  console.log("rows", rows);
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

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div class="row min-vh-100">
        <div class="card-container col-md-5">
          <img
            class="round"
            style={{ width: "140px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpEZxjP9nLQsGEntnPcYFGVXtNmFGysDTZA&usqp=CAU"
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
                  type={passwordShown ? "text" : "password"}
                  onChange={(e) => OldPwd(e)}
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  className="w-50"
                />
                <i
                  onClick={togglePassword}
                  class="far fa-eye"
                  id="togglePassword"
                  style={{
                    paddingLeft: "3rem",
                    marginLeft: " 75rem",
                    cursor: "pointer",
                  }}
                ></i>
                <TextField
                  value={newPassword}
                  type={passwordShown ? "text" : "password"}
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
            <TabPanel value={value} index={1} >
              <TableContainer component={Paper} className="my-5 mx-5">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Total</TableCell>
                      {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.ID}
                        x
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                        <NavLink
                        to={`orders/${row.id}`}
                        className=" btn-outline-dark  ms-2 px-3 py-2"
                      >
                        {row.id}
                      </NavLink>
                        </TableCell>
                        <TableCell align="right">
                          {row.Name} {localStorage.getItem("name")}
                        </TableCell>
                        <TableCell align="right">{row.orderStatus} </TableCell>
                        <TableCell align="right">{row.totalPrice}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
    </>
  );
}
