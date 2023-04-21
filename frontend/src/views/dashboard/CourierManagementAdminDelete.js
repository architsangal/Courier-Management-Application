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

import avatar1 from "src/assets/images/avatars/1.jpg";
import avatar2 from "src/assets/images/avatars/2.jpg";
import avatar3 from "src/assets/images/avatars/3.jpg";
import avatar4 from "src/assets/images/avatars/4.jpg";
import avatar5 from "src/assets/images/avatars/5.jpg";
import avatar6 from "src/assets/images/avatars/6.jpg";

import WidgetsBrand from "../widgets/WidgetsBrand";
import WidgetsDropdown from "../widgets/WidgetsDropdown";

const Dashboard = () => {
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


  const refresh = () =>
  {
    handleUpload();
  }

  const handleUpload = () => {
    let formData = new FormData();
    formData.append("courierID",cid);
    axios({
      url: process.env.REACT_APP_BACKEND_API_URL+"deleteCourier",
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+JSON.parse(localStorage.getItem('details')).token
      },
      data: formData,
    })
      .then((res) =>
      {
        setShowAlertSuccess(true);
        setShowAlertFail(false);
      })
      .catch((err) => { 
        setShowAlertFail(true);
        setShowAlertSuccess(false);
      });

      setCID("");
  };

  const submitted = () => {
    handleUpload();
  }

  return(
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
                Courier Deleted!
              </CAlert>
            </div>

            <div className="mt-2">
              <CAlert
                dismissible={true}
                color="danger"
                visible={showAlertFail}
              >
                Courier Deletion Failed!
              </CAlert>
            </div>

            <CForm onSubmit={submitted}>
              <h1>Courier Delete  </h1>
              <p className="text-medium-emphasis">Enter the following details</p>

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

              <div className="d-grid">
                <CButton type="submit" color="success">
                  Delete Courier
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
