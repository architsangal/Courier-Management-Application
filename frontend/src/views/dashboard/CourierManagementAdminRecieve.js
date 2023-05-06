import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { Link } from "react-router-dom";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import CIcon from "@coreui/icons-react";
import {
  cilLockLocked,
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilBowling,
  cilBorderAll,
  cilLoop,
  cilInbox,
} from "@coreui/icons";

// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Dashboard = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-17T15:30"));

  const [tableExample, setTableExample] = useState([]);

  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const handleShowAlertSuccess = (event) => {
    setShowAlertSuccess(false);
  };

  const [showAlertFail, setShowAlertFail] = useState(false);
  const handleShowAlertFail = (event) => {
    setShowAlertFail(false);
  };

  const [cid, setCID] = useState("");
  const handleCID = (event) => {
    setCID(event.target.value);
  };

  const [username, setUserName] = useState("");
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const [date, setDate] = useState("");
  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const [time, setTime] = useState("");
  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const [company, setCompany] = useState("");
  const handleCompany = (event) => {
    setCompany(event.target.value);
  };

  const refresh = () => {
    handleUpload();
  };

  const handleUpload = () => {
    console.log(value.$d.toJSON().substring(0, value.$d.toJSON().indexOf("T")));
    console.log(
      value.$d.toTimeString().substring(0, value.$d.toTimeString().indexOf(" "))
    );

    let formData = new FormData();
    formData.append("courierID", cid);
    formData.append("receiverName", firstName + " " + lastName);
    formData.append("status", "COMPLETE");
    formData.append("deliverDate", value.$d.toJSON().substring(0, value.$d.toJSON().indexOf("T")));
    formData.append("deliverTime", value.$d.toTimeString().substring(0, value.$d.toTimeString().indexOf(" ")));
    formData.append("receiverRollNo", username);
    axios({
      url: process.env.REACT_APP_BACKEND_API_URL + "updateCourier",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("details")).token,
      },
      data: formData,
    })
      .then((res) => {
        setShowAlertSuccess(true);
        setShowAlertFail(false);
      })
      .catch((err) => {
        setShowAlertFail(true);
        setShowAlertSuccess(false);
      });
  };

  const submitted = () => {
    handleUpload();
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <div className="mt-2">
                  <CAlert
                    dismissible={true}
                    color="success"
                    visible={showAlertSuccess}
                  >
                    Courier Receiver Info Updated!
                  </CAlert>
                </div>

                <div className="mt-2">
                  <CAlert
                    dismissible={true}
                    color="danger"
                    visible={showAlertFail}
                  >
                    Courier Update Failed!
                  </CAlert>
                </div>

                <h1>Reciever Info Update</h1>
                  <p className="text-medium-emphasis">
                    Enter the following details
                  </p>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateTimePicker"]}>
                        {/* <DemoItem> */}
                        {/* label="Responsive variant"> */}
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div
                            style={{
                              flex: "1 1 auto",
                            }}
                          ></div>
                          <div className="d-flex flex-row align-items-center justify-content-center">
                            <DateTimePicker
                              className="mb-3 d-flex flex-row align-items-center"
                              value={value}
                              onChange={(newValue) => setValue(newValue)}
                              defaultValue={dayjs("2022-04-17T15:30")}
                            />
                          </div>
                          <div
                            style={{
                              flex: "1 1 auto",
                            }}
                          ></div>
                        </div>
                        {/* </DemoItem> */}
                      </DemoContainer>
                    </LocalizationProvider>
                    {/* Resource - https://mui.com/x/react-date-pickers/date-time-picker/ */}

                <CForm onSubmit={submitted}>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Courier ID"
                      autoComplete="cid"
                      value={cid}
                      onChange={handleCID}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Reciever Roll Number"
                      autoComplete="username"
                      value={username}
                      onChange={handleUserName}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    <CFormInput
                      placeholder="First Name"
                      value={firstName}
                      onChange={handleFirstName}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    <CFormInput
                      placeholder="Last Name"
                      value={lastName}
                      onChange={handleLastName}
                    />
                  </CInputGroup>


                  <div className="d-grid">
                    <CButton type="submit" color="success">
                      Recieve Courier
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Dashboard;
