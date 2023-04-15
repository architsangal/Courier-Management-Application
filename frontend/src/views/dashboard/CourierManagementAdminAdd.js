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

  const refresh = () =>
  {
    handleUpload();
  }

  useEffect(() => {
    handleUpload();
  }, []);

  const handleUpload = () => {
    let formData = new FormData();
    
    // Adding files to the formdata
    axios({
      // Endpoint to send files
      url: "http://localhost:9090/getAllCouriers",
      method: "GET",
      headers: {
        // Add any auth token here
        // authorization: "your token comes here",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+JSON.parse(localStorage.getItem('details')).token
      },
      // Attaching the form data
      data: formData,
    })
      // Handle the response from backend here
      .then((res) =>
      {
        const data = res.data.sort((a, b) => {return b.courierID - a.courierID;});
        console.log(data);
        setTableExample(data)
      })
      // Catch errors if any
      .catch((err) => { });
  };

  const submitted = () => {

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
                visible={true}
              >
                User Registered Sucessfully!
              </CAlert>
            </div>

            <div className="mt-2">
              <CAlert
                dismissible={true}
                color="danger"
                visible={true}
              >
                User Registration Failed!
              </CAlert>
            </div>

            <CForm onSubmit={submitted}>
              <h1>Register</h1>
              <p className="text-medium-emphasis">Create your account</p>

              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Roll Number"
                  autoComplete="username"
                  // value={username}
                  // onChange={handleUserName}
                />
              </CInputGroup>

              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>

                <CFormInput
                  placeholder="First Name"
                  // value={firstName}
                  // onChange={handleFirstName}
                />
              </CInputGroup>

              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>

                <CFormInput
                  placeholder="Last Name"
                  // value={lastName}
                  // onChange={handleLastName}
                />
              </CInputGroup>

              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  // value={password}
                  // onChange={handlePassword}
                />
              </CInputGroup>

              <div className="d-grid">
                <CButton type="submit" color="success">
                  Create Account
                </CButton>
              </div>
              <div className="right-button">
                <Link to="/login">
                  <CButton color="link" className="text-right px-0 ">
                    Login Instead?
                  </CButton>
                </Link>
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
